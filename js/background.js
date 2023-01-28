const images = ["img1.jpg", "img3.jpg", "img2.jpg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("body");
bgImage.style.backgroundImage = `url(/images/${chosenImages})`;