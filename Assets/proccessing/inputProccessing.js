let rawUserInput = '' // The raw user input - import ?
let lowerRawUserInput = 0
let userInput = 0
let assumeQuestion = false
let assumeStatement = false
let assumeIncludesEmoji = false
let currentCheck = 0
let userInputLength = 0

function checkQuestion() {
    currentCheck = 0
    while (currentCheck <= userInputLength) {          // VERY UNSTABLE
        if (userInput[currentCheck] == "?") {
            assumeQuestion = true
            return assumeQuestion;
        } else {

        }
        currentCheck = currentCheck + 1
    }
}

// function checkStatement() {
//     currentCheck = 0
//     while (currentCheck < userInputLength) {
//         if (userInput[currentCheck] == "STATEMENT STUFF") {  // needs to import built in logic
//             console.log('Debug: Assume statement')
//         } else if (currentCheck == userInput.length()) {
//             console.log('Debug: Do not assume statement')
//             assumeQuestion = false
//         } else {
//             currentCheck = currentCheck + 1
//         }
//     }
// }

function checkIncludesEmoji() {
    if (userInput == "") {
        assumeIncludesEmoji = true
    } else {
        assumeIncludesEmoji = false
    }
}

function checkValidationValues() {
    if (assumeQuestion == true || assumeStatement == true) {
    console.log('Debug: Determined if question or statement')
    } else {
        let errorMessage = "Error: Could not determine if (' + rawUserInput + ') is a statement or a question."
        return errorMessage;
    }
}


lowerRawUserInput = rawUserInput.toLowerCase()
userInput = lowerRawUserInput.split(' ')
userInputLength = userInput.length()
checkQuestion()
checkIncludesEmoji()
checkValidationValues()

