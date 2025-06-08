const tracks = [
  { title: "Canción 1", file: "musica/cancion1.mp3" },
  { title: "Canción 2", file: "musica/cancion2.mp3" }
];

let currentTrack = 0;

const audio = document.getElementById("audio-player");
const title = document.getElementById("track-title");

function loadTrack(index) {
  audio.src = tracks[index].file;
  title.textContent = tracks[index].title;
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

// Cargar la primera canción al inicio
window.onload = () => {
  loadTrack(currentTrack);
};