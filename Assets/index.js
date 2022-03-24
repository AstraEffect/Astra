// import 'Assets/processing/inputProcessing.js'
// import builtInLogic from 'Assets/logic/builtInLogic.json';

let rawUserInput = '' // The raw user input - import ?
let lowerRawUserInput = 0
let userInput = 0
let assumeQuestion = false
let assumeStatement = false
let assumeIncludesEmoji = false
let currentCheck = 0
let userInputLength = 0

function processInput() {
    lowerRawUserInput = rawUserInput.toLowerCase()
    userInput = lowerRawUserInput.split(' ')
    userInputLength = userInput.length
    determineInput()
    checkIncludesEmoji()
    checkValidationValues()
}

// if (assumeQuestion == true) {
//     processQuestion()
//     console.log('Debug: Started processing question')
// } else if (assumeStatement == true) {
//     console.log('Debug: Started processing statement')
//     processStatement()
// } else {
//     errorMessage = "Error: Could not process input (' + rawUserInput + ')"
//     console.log(errorMessage)
// }