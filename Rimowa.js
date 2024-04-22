function togglePlayPause() {
    var video = document.getElementById('bg-video');
    var playIcon = document.getElementById('playIcon');
    var pauseIcon = document.getElementById('pauseIcon');

    if (video.paused || video.ended) {
      video.play();
      pauseIcon.style.display = "block";
      playIcon.style.display = "none";
    } else {
      video.pause();
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
    }
  }

  document.getElementById('controllArrowbtn').addEventListener('click', function() {
    var customiseCard = document.getElementById('customiseCard');
    customiseCard.scrollBy({
      left: 245,
        behavior: 'smooth',
    });
});

  document.getElementById('controllArrowLeftbtn').addEventListener('click', function() {
    var customiseCard = document.getElementById('customiseCard');
    customiseCard.scrollBy({
      left: -245,
        behavior: 'smooth',
    });
});

  document.getElementById('controllArrowbtnEditor').addEventListener('click', function() {
    var customiseCardEditor = document.getElementById('customiseCardEditor');
    customiseCardEditor.scrollBy({
      left: 245,
        behavior: 'smooth',
    });
});

  document.getElementById('controllArrowLeftbtnEditor').addEventListener('click', function() {
    var customiseCardEditor = document.getElementById('customiseCardEditor');
    customiseCardEditor.scrollBy({
      left: -245,
        behavior: 'smooth',
    });
});
