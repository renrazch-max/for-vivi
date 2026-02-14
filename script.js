// Hati jatuh terus menerus
function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 5 + "s";
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 300);

// Tombol tidak kabur (aman untuk HP)
function kabur(btn) {
  const x = Math.random() * (window.innerWidth - btn.offsetWidth);
  const y = Math.random() * (window.innerHeight - btn.offsetHeight);
  btn.style.position = "fixed";
  btn.style.left = x + "px";
  btn.style.top = y + "px";
}

// Game klik love
let count = 0;
function klikLove() {
  count++;
  document.getElementById("count").innerText = "Klik: " + count;

  if (count === 10) {
    document.getElementById("nextBtn").style.display = "inline";
    document.getElementById("sound").play();
    confetti();
  }
}

// Confetti love
function confetti() {
  for (let i = 0; i < 50; i++) {
    const conf = document.createElement("span");
    conf.innerHTML = "💖";
    conf.style.position = "fixed";
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.top = Math.random() * 100 + "vh";
    conf.style.fontSize = "24px";
    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), 2000);
  }
}

// Teka teki
function salah() {
  document.getElementById("hasil").innerText = "Coba lagi sayang 😝";
}

function benar() {
  document.getElementById("hasil").innerText = "Sayangku hebat banget 💕";
  document.getElementById("lanjutSurat").style.display = "inline";
}

// Surat
function bukaSurat() {
  document.getElementById("isiSurat").style.display = "block";
}
