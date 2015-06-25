var final_transcript = '';
var f = document.forms.e_form;

var recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.interimResults = false;

function start() {
    final_transcript = '';
    recognition.start();
}

function stop() {
    recognition.stop();
}

recognition.onresult = function(event) {
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript;
        }

        f.e_input.value = final_transcript;
    }
};
