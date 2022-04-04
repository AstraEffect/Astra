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
let hasRunBefore = 0

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
    hasRunBefore = getCookie('hasRunBefore')
    console.log('Debug: Astra version: ' + astraInfo.version);
    console.log('Debug: Has run before: ' + hasRunBefore)
    if (hasRunBefore != 'true') {
        console.log('Debug: Astra has not been run before. Setting up...');
        document.cookie='hasRunBefore=true'
        firstTimeRun();
    } else {
        console.log('Debug: Astra has been run before. Using previous session data.');
        body.style.visibility = 'visible';
    }
}

astraSetup();