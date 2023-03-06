const musicFiles = ["song1.m4a", "song2.m4a", "song3.m4a", "song4.m4a","song5.m4a","song6.m4a","song7.m4a","song8.m4a","song9.m4a","song10.m4a","song11.m4a","song12.m4a","song13.m4a","song14.m4a","song1-1.mp3",];
const musicToggle = document.getElementById("music-toggle");
const audio = new Audio();

musicToggle.addEventListener("click", () => {
  console.log("Button clicked"); // added console.log statement
  if (audio.paused) {
    audio.src = musicFiles[Math.floor(Math.random() * musicFiles.length)];
    audio.play();
    musicToggle.innerHTML = "Stop Music";
  } else {
    audio.pause();
    musicToggle.innerHTML = "Play Music";
  }
});


