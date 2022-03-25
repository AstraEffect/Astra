let rawUserInput = '' // The raw user input - import ?
let lowerRawUserInput = 0
let userInput = 0
let assumeQuestion = false
let assumeStatement = false
let assumeIncludesEmoji = false
let currentCheck = 0
let userInputLength = 0
let questionFormatLength = 0

function processInput() {
    questionFormatLength = builtInLogic.questionFormat.length
    lowerRawUserInput = rawUserInput.toLowerCase()
    userInput = lowerRawUserInput.split(' ')
    userInputLength = userInput.length
    determineInput()
    checkIncludesEmoji()
    checkValidationValues()
};
