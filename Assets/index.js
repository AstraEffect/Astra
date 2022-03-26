let rawUserInput = ''
let lowerRawUserInput = 0
let userInput = 0
let assumeQuestion = false
let assumeStatement = false
let assumeIncludesEmoji = false
let currentCheck = 0
let userInputLength = 0
let questionFormatLength = 0
let inputType = ''
let form = document.getElementById("inputBar");
function handleForm(event) { event.preventDefault(); processInput();} 
form.addEventListener('submit', handleForm);

function processInput() {
    rawUserInput = document.getElementById("rawUserInputHtml").value;
    questionFormatLength = builtInLogic.questionFormat.length
    rawUserInputHtml.value='';
    lowerRawUserInput = rawUserInput.toLowerCase();
    userInput = lowerRawUserInput.split(' ');
    userInputLength = userInput.length
    console.log(' ');
    console.log('Debug: Now processing: ' + rawUserInput);
    console.log(' ');
    determineInput();
    checkIncludesEmoji();
    checkValidationValues();
    generateResponse();
};