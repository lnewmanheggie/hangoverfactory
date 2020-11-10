
// creates an array of all the buttons
const buttonArray = Array.from(document.getElementsByClassName("button"));

// creates an array of all the lyrics
const lyricArray = Array.from(document.getElementsByClassName("lyrics"));

// sets default lyric display to none
for (lyric of lyricArray) {
    lyric.style.display = "none";
}

// function that will display individual lyrics when called
displayLyrics = (button) => {
    let lyric = lyricArray[buttonArray.indexOf(button)];
    if (lyric.style.display === "none") {
        lyric.style.display = "block";
    } else {
        lyric.style.display = "none";
    }
}

for (i=0; i<buttonArray.length; i++) {
    const button = buttonArray[i];
    button.addEventListener("click", function() {
        displayLyrics(button);
    });
}