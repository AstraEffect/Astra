function determineInput() {
    if (rawUserInput.includes('?')) {
        assumeQuestion = true;
        assumeStatement = false;
    } else {
        currentCheck = 0
        while (currentCheck <= questionFormatLength) {
            if (userInput[0] == builtInLogic.questionFormat[currentCheck]) {
                assumeQuestion = true;
                assumeStatement = false;
                return;
            } else {
                assumeQuestion = false;
                assumeStatement = true;
            }
            currentCheck = currentCheck + 1;
            console.log('Debug: Determining if question - pass ' + currentCheck + ' of ' + questionFormatLength);
        };
    };
};

function checkIncludesEmoji() {
    if (rawUserInput.includes(':')) {
        assumeIncludesEmoji = true;
    } else {
        assumeIncludesEmoji = false;
    };
};

function checkValidationValues() {
    if (assumeQuestion == true || assumeStatement == true) {
        console.log('Debug: Determined if statement ' + assumeStatement);
        console.log('Debug: Determined if question ' + assumeQuestion);
        console.log('Debug: Determined if includes emoji ' + assumeIncludesEmoji);
        console.log('Debug: Determined if question or statement; Question:' + assumeQuestion + ' Statement: ' + assumeStatement);
    } else {
        let errorMessage = "Error: Could not determine if (' + rawUserInput + ') is a statement or a question.";
        return errorMessage;
    };
};