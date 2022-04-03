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
let body = document.getElementById("body");
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

function firstTimeRun() {
    // redirct to a windowwith video of animation that then redirects you back when over 
}

function astraSetup() {
    console.log('Debug: Astra version: ' + astraInfo.version);
    console.log('Debug: First time run: ' + astraInfo.hasRunBefore);
    if (astraInfo.hasRunBefore == 'false') {
        console.log('Debug: Astra has not been run before. Setting up...');
        astraInfo.hasRunBefore = 'true';
        firstTimeRun();
    } else {
        console.log('Debug: Astra has been run before. Using previous session data.');
        body.style.visibility = 'visible';
    }
}

astraSetup();