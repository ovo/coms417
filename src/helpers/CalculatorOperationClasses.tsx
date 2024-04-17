/**
 * This function takes in a string containing numbers, and the operators +, -, /, and * and attempts to evaluate a resulting number
 * @param functionString the string to parse and evaluate a result from
 * @returns 'Error' if the function is invalid, and the resulting number if the function is valid
 */
export function evalFunction(functionString: string): number | string {
    // If nothing has been entered, no need to error or evaluate, just return 0
    if(functionString.length == 0) {
        return 0;
    }

    // Ensure that the function starts with a number
    if(!functionString.match(/^[0-9]/)) {
        // Return 'Error' so that the user can't attempt to evaluate a function starting with an operator
        return 'Error';
    }

    // Remove all whitespace to ensure consistency in parsing.
    functionString = functionString.replace(' ', '');

    // Must evaluate in PEMDAS order
    // Find all occurances of multiplicaton, evaluate them, then update the function
    let multAppearances = functionString.match(/[0-9]+\*[0-9]+/);
    multAppearances?.forEach(fn => {
        // Every matching appearance will be of the form {NUMBER}*{NUMBER} meaning splitting it by '*' will always result in the needed operators
        let operators = fn.split('*');
        let result: number = (+operators[0]) * (+operators[1]);
        functionString = functionString.replace(/[0-9]+\*[0-9]+/, result.toString());
    });

    // Find all occurances of division, evaluate them, then update the function
    let divAppearances = functionString.match(/[0-9]+\/[0-9]+/);
    divAppearances?.forEach(fn => {
        // Every matching appearance will be of the form {NUMBER}/{NUMBER} meaning splitting it by '/' will always result in the needed operators
        let operators = fn.split('/');
        let result: number = (+operators[0]) / (+operators[1]);
        functionString = functionString.replace(/[0-9]+\/[0-9]+/, result.toString());
    });

    // Find all occurances of addition, evaluate them, then update the function
    let addAppearances = functionString.match(/[0-9]+\+[0-9]+/);
    addAppearances?.forEach(fn => {
        // Every matching appearance will be of the form {NUMBER}+{NUMBER} meaning splitting it by '+' will always result in the needed operators
        let operators = fn.split('+');
        let result: number = (+operators[0]) + (+operators[1]);
        functionString = functionString.replace(/[0-9]+\+[0-9]+/, result.toString());
    });

    // Find all occurances of subtraction, evaluate them, then update the function
    let subAppearances = functionString.match(/[0-9]+\-[0-9]+/);
    subAppearances?.forEach(fn => {
        // Every matching appearance will be of the form {NUMBER}-{NUMBER} meaning splitting it by '-' will always result in the needed operators
        let operators = fn.split('-');
        let result: number = (+operators[0]) - (+operators[1]);
        functionString = functionString.replace(/[0-9]+\-[0-9]+/, result.toString());
    });

    // Parse the result to int and return
    return +functionString;
}