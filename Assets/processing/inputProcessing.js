function determineInput() {
    if (rawUserInput.includes('?')) {
        assumeQuestion = true;
        assumeStatement = false;
        console.log('Debug: Determined if question' + assumeQuestion);
    } else {
        assumeQuestion = false;
        assumeStatement = true;
        console.log('Debug: Determined if question' + assumeQuestion);
    };
};

function checkIncludesEmoji() {
    if (userInput.includes(':')) {
        assumeIncludesEmoji = true;
        console.log('Debug: Determined if includes emoji' + assumeIncludesEmoji);
    } else {
        assumeIncludesEmoji = false;
        console.log('Debug: Determined if includes emoji' + assumeIncludesEmoji);
    };
};

function checkValidationValues() {
    if (assumeQuestion == true || assumeStatement == true) {
    console.log('Debug: Determined if question or statement');
    } else {
        let errorMessage = "Error: Could not determine if (' + rawUserInput + ') is a statement or a question.";
        return errorMessage;
    }
}

function tester() {
    alert('this is a test');
}