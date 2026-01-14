const images = [
  "images/memories/IMG_1397.jpeg",
  "images/memories/IMG_2006.jpeg",
  "images/memories/IMG_2161.jpeg",
  "images/memories/IMG_2563.jpeg",
  "images/memories/IMG_2665.jpeg",
  "images/memories/IMG_2930.jpeg",
  "images/memories/IMG_4342.jpeg",
  "images/memories/IMG_5876.jpeg",
  "images/memories/IMG_7145.jpeg",
  "images/memories/IMG_9328.jpeg"
];

const memoryImg = document.getElementById("memoryImage");
let index = 0;
let interval;

function showNextMemory() {
  memoryImg.src = images[index];
  memoryImg.style.opacity = "1";

  setTimeout(() => {
    memoryImg.style.opacity = "0";
  }, 3500);

  index = (index + 1) % images.length;
}

interval = setInterval(showNextMemory, 5000);
showNextMemory();

function openLetter() {
  clearInterval(interval);
  memoryImg.style.opacity = "0";
  document.getElementById("envelope").style.display = "none";
  document.getElementById("letter").classList.remove("hidden");
}
