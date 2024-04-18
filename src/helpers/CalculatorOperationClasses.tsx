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
    while(functionString.match(/[0-9]+\*[0-9]+/) !== null) {
        let multAppearance = functionString.match(/[0-9]+\*[0-9]+/)![0];
        // Every matching appearance will be of the form {NUMBER}*{NUMBER} meaning splitting it by '*' will always result in the needed operators
        let operators = multAppearance.split('*');
        let result: number = (+operators[0]) * (+operators[1]);
        functionString = functionString.replace(multAppearance, result.toString());
        console.log(functionString);
    }

    // Find all occurances of division, evaluate them, then update the function
    while(functionString.match(/[0-9]+\/[0-9]+/) !== null) {
        let divAppearance = functionString.match(/[0-9]+\/[0-9]+/)![0];
        // Every matching appearance will be of the form {NUMBER}/{NUMBER} meaning splitting it by '/' will always result in the needed operators
        let operators = divAppearance.split('/');
        let result: number = (+operators[0]) / (+operators[1]);
        functionString = functionString.replace(divAppearance, result.toString());
    }

    // Find all occurances of addition, evaluate them, then update the function
    while(functionString.match(/[0-9]+\+[0-9]+/) !== null) {
        let addAppearance = functionString.match(/[0-9]+\+[0-9]+/)![0];
        // Every matching appearance will be of the form {NUMBER}+{NUMBER} meaning splitting it by '+' will always result in the needed operators
        let operators = addAppearance.split('+');
        let result: number = (+operators[0]) + (+operators[1]);
        functionString = functionString.replace(addAppearance, result.toString());
    }

    // Find all occurances of subtraction, evaluate them, then update the function
    while(functionString.match(/\-?[0-9]+\-\-?[0-9]+/) !== null) {
        // Notice that because we are dealing with subtraction now, the result could be negative. We must handle that in the Regex
        let subAppearance = functionString.match(/\-?[0-9]+\-\-?[0-9]+/)![0];
        // Every matching appearance will be of the form {NUMBER}-{NUMBER}, {NUMBER}--{NUMBER}, -{NUMBER}-{NUMBER}, or -{NUMBER}--{NUMBER} meaning that splitting by '-' will give us the operators we need, and have values of '' if the next number should be corrected to negative
        let operators = subAppearance.split('-');
        let operator1: number;
        let operator2: number;

        // Both nums positive
        if(operators.length == 2) {
            operator1 = (+operators[0]);
            operator2 = (+operators[1]);
        // Both nums negative
        } else if(operators.length == 4) {
            operator1 = -1 * (+operators[1]);
            operator2 = -1 * (+operators[3]);
        } else {
            // First num negative
            if(operators[0] == '') {
                operator1 = -1 * (+operators[1]);
                operator2 = (+operators[2]);
            // Second num negative
            } else {
                operator1 = (+operators[0]);
                operator2 = -1 * (+operators[2]);
            }
        }
        let result: number = operator1 - operator2;
        functionString = functionString.replace(subAppearance, result.toString());
    }

    // Parse the result to int and return
    return +functionString;
}