let rawUserInput = '' // The raw user input - import ?
let lowerRawUserInput = 0
let userInput = 0
let assumeQuestion = false
let assumeStatement = false
let assumeIncludesEmoji = false
let currentCheck = 0
let userInputLength = 0

function determineInput() {
    if (rawUserInput.includes('?')) {
        assumeQuestion = true
        assumeStatement = false
        console.log('Debug: Determined if question' + assumeQuestion)
    } else {
        assumeQuestion = false
        assumeStatement = true
        console.log('Debug: Determined if question' + assumeQuestion)
    }
}

function checkIncludesEmoji() {
    if (userInput.includes(':')) {
        assumeIncludesEmoji = true
        console.log('Debug: Determined if includes emoji' + assumeIncludesEmoji)
    } else {
        assumeIncludesEmoji = false
        console.log('Debug: Determined if includes emoji' + assumeIncludesEmoji)
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
determineInput()
checkIncludesEmoji()
checkValidationValues()

if (assumeQuestion == true) {
    processQuestion()
    console.log('Debug: Started processing question')
} else if (assumeStatement == true) {
    console.log('Debug: Started processing statement')
    processStatement()
} else {
    errorMessage = "Error: Could not process input (' + rawUserInput + ')"
    console.log(errorMessage)
}