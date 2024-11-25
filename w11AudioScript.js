//This function will add sound to our page.
function addSound()
{
    //Create an audio element, and get the play and pause buttons.
    var soundElement = document.createElement("audio");
    var btnPlay = document.getElementById("btnPlay");
    var btnPause = document.getElementById("btnPause");

    //Set the sound ID.
    soundElement.setAttribute("id", "audioSound");

    //Set the sound file that'll be played.
    soundElement.setAttribute("src", "DescendingNote.wav");

    document.body.appendChild(soundElement);

    //Show the play and pause buttons.
    btnPlay.hidden = false;
    btnPause.hidden = false;
}

function playSound()
{
    var audio = document.getElementById("audioSound");
    audio.play();
    console.log("sound playing");
}

function pauseSound()
{
    var audio = document.getElementById("audioSound");
    audio.pause();
    console.log("sound paused")
}
