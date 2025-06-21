function openVideo(videoId) {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoPlayer");
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  modal.style.display = "flex";
}

function closeVideo() {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoPlayer");
  iframe.src = "";
  modal.style.display = "none";
}
