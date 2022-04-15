const recognition = new window.SpeechRecognition();

recognition.onstart = function() {
  console.log("Voice recognition started. Try speaking into the microphone.");
};

recognition.onresult = function(event) {
  let transcript = event.results[0][0].transcript;
  console.log(transcript);
};

recognition.start();
