const tracks = [
  { title: "Canción 1", file: "musica/cancion1.mp3" },
  { title: "Canción 2", file: "musica/cancion2.mp3" }
];

let currentTrack = 0;

const audio = document.getElementById("audio-player");
const title = document.getElementById("track-title");

function loadTrack(index) {
  const track = tracks[index];
  audio.src = track.file;
  title.textContent = track.title;

  // Actualizar mini portada
  const miniCover = document.getElementById("mini-cover");
  miniCover.src = "portadas/cancion" + (index + 1) + ".png";

  audio.play();
}
audio.addEventListener("play", () => {
  const miniCover = document.getElementById("mini-cover");
  miniCover.style.animationPlayState = "running";
});

audio.addEventListener("pause", () => {
  const miniCover = document.getElementById("mini-cover");
  miniCover.style.animationPlayState = "paused";
});
function nextSong() {
  currentTrack = (currentTrack + 1) % tracks.length;
  loadTrack(currentTrack);
}

function prevSong() {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrack);
}

// Cargar la primera canción al inicio
window.onload = () => {
  loadTrack(currentTrack);
};