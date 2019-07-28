"use strict";

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key=${e.key}]`); //find out how backticks work
    console.log(e.key); //to find out which keys are being used
    audio.currentTime = 0; //rewind to start, so that the sound is not sketchy
    if (!audio) return; // return stops the function and returns the value at that given moment, assuming the key is registered.
    audio.play();

    const pressed = [];
    const secretCode = 'afddg';
    window.addEventListener('keyup', (e) => {
        //console.log(e.key);
        pressed.push(e.key);
        pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
        if (pressed.join('').includes(secretCode)) {
            console.log('DING DING!');
            audio.play();
        }
    });

});
/*
const pressed = [];
const secretCode = 'afddg';
window.addEventListener('keyup', (e) => {
    //console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
        console.log('DING DING!');
        audio.play();
    }
    console.log(pressed);
});
*/

