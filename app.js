const tracks = [
  { title: "Canción 1 - Siempre Tú", file: "musica/cancion1.mp3" },
  { title: "Canción 2 - Siempre Contigo", file: "musica/cancion2.mp3" },
  { title: "Canción 3 - Estoy Contigo", file: "musica/cancion3.mp3" }
];

let currentTrack = 0;

const audio = document.getElementById("audio-player");
const title = document.getElementById("track-title");
const miniCover = document.getElementById("mini-cover");

function loadTrack(index) {
  const track = tracks[index];
  audio.src = track.file;
  title.textContent = track.title;

  // Cambiar mini portada según la canción (asumiendo nombres: cancion1.png, etc.)
  miniCover.src = "portadas/cancion" + (index + 1) + ".png";

  audio.play();
}

function nextSong() {
  currentTrack = (currentTrack + 1) % tracks.length;
  loadTrack(currentTrack);
}

function prevSong() {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrack);
}

// Hacer que la mini portada gire al reproducir
audio.addEventListener("play", () => {
  miniCover.style.animationPlayState = "running";
});

// Detener la rotación al pausar
audio.addEventListener("pause", () => {
  miniCover.style.animationPlayState = "paused";
});

// Cargar la primera canción al inicio
window.onload = () => {
  loadTrack(currentTrack);
};