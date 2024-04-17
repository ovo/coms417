export function evalFunction(functionString: string): number {
    if(functionString.length == 0) {
        return 0;
    }

    // Ensure that the function starts with a number
    if(!functionString.match(/^[0-9]/)) {
        // Swap this to return error possibly
        return 0;
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