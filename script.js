onload = () => {
    document.body.classList.remove("container");
  };
  document.addEventListener('DOMContentLoaded', function() {
    var music = document.getElementById('background-music');
    var toggleButton = document.getElementById('toggle-music');
    var playIcon = document.getElementById('play-icon');
    var isPlaying = false;
    
    toggleButton.addEventListener('click', function() {
        if (isPlaying) {
            music.pause();
            playIcon.src = "play.png";
        } else {
            music.play();
            playIcon.src = "pause.png";
        }
        isPlaying = !isPlaying;
    });

    var volumeControl = document.getElementById('volume-control');
    volumeControl.addEventListener('input', function() {
        music.volume = volumeControl.value / 100;
    });
});