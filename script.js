let currentPhoto = 0;

const captions = [
  "My favorite smile 🌸",
  "The moment everything changed 💕",
  "My safe place 💗"
];

const reasons = [
  "Your smile makes my worst days better.",
  "You listen to my nonsense.",
  "You make me feel safe.",
  "You’re my comfort human.",
  "You’re cute and you don’t even try.",
  "Because it's you. Always you."
];

const typingText = "Hey babyyy... I made something for you 💗";

let i = 0;
function typeWriter() {
  if (i < typingText.length) {
    document.getElementById("typingText").innerHTML += typingText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();

function nextPage() {
  document.getElementById("page1").classList.remove("active");
  document.getElementById("page2").classList.add("active");
}

document.getElementById("noBtn").addEventListener("mouseover", function() {
  this.style.position = "absolute";
  this.style.top = Math.random() * 300 + "px";
  this.style.left = Math.random() * 300 + "px";
});

function sayYes() {
  confettiEffect();
  document.getElementById("page2").classList.remove("active");
  document.getElementById("page3").classList.add("active");
}

function showGallery() {
  document.getElementById("page3").classList.remove("active");
  document.getElementById("page4").classList.add("active");
  updatePhoto();
}

function nextPhoto() {
  currentPhoto = (currentPhoto + 1) % captions.length;
  updatePhoto();
}

function updatePhoto() {
  document.getElementById("photo").src = "photo/photo" + (currentPhoto+1) + ".jpeg";
  document.getElementById("caption").innerText = captions[currentPhoto];
}

function showReasons() {
  document.getElementById("page4").classList.remove("active");
  document.getElementById("page5").classList.add("active");

  const box = document.getElementById("reasonsBox");
  reasons.forEach(reason => {
    const p = document.createElement("p");
    p.innerText = reason;
    box.appendChild(p);
  });
}

function showLetter() {
  document.getElementById("page5").classList.remove("active");
  document.getElementById("page6").classList.add("active");
}

function confettiEffect() {
  for(let i=0;i<100;i++){
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random()*100+"vw";
    heart.style.animation = "float 3s linear";
    document.body.appendChild(heart);
  }
}
