let rawUserInput = ''
let lowerRawUserInput = 0
let userInput = 0
let assumeQuestion = false
let assumeStatement = false
let assumeIncludesEmoji = false
let currentCheck = 0
let userInputLength = 0
let questionFormatLength = 0

function processInput() {
    rawUserInput = document.getElementById("rawUserInputHtml").value;
    questionFormatLength = builtInLogic.questionFormat.length
    lowerRawUserInput = rawUserInput.toLowerCase()
    userInput = lowerRawUserInput.split(' ')
    userInputLength = userInput.length
    console.log(' ')
    console.log('Debug: Now processing: ' + rawUserInput)
    console.log(' ')
    determineInput()
    checkIncludesEmoji()
    checkValidationValues()
};
