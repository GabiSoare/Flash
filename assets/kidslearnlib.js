var my_media = null;
var mediaTimer = null;

function playAudio(nameFile) {
    // Create Media object from src

    if (my_media) {
        my_media.stop();
    }
    var rootSrc = getPath() + "sounds/" + nameFile+".mp3";
    my_media = new Media(rootSrc, onSuccess, onError);

    // Play audio
    my_media.play();
}
function stopAudio() {

    my_media.stop();
}

function getPath() {
    var str = location.pathname;
    var i = str.lastIndexOf('/');
    return str.substring(0, i + 1);
}

// onSuccess Callback
//
function onSuccess() {
    console.log("playAudio():Audio Success");
}

// onError Callback
//
function onError(error) {
    // alert('code: '    + error.code    + '\n' +
    //       'message: ' + error.message + '\n');
}

// onSuccess Callback
//
function onSuccess() {
    console.log("playAudio():Audio Success");
}

// onError Callback
//
function onError(error) {
    // alert('code: '    + error.code    + '\n' +
    //       'message: ' + error.message + '\n');
}