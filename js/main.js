function criarHomeBtn() { 
  return `<img class="home-btn" src="/svg/home.svg" alt="icon de home"/>`
}

console.log("conectado");
const main = document.querySelector('main');
const card1 = document.querySelector('.content-home-cards-1');
const card2 = document.querySelector('.content-home-cards-2');
const card3 = document.querySelector('.content-home-cards-3');
const card4 = document.querySelector('.content-home-cards-4');
const card5 = document.querySelector('.content-home-cards-5');
const card6 = document.querySelector('.content-home-cards-6');
const card7 = document.querySelector('.content-home-cards-7');
const card8 = document.querySelector('.content-home-cards-8');

const inserirHomeBtn = () => {
  const homeBtnHTML = criarHomeBtn();
  main.insertAdjacentHTML('beforeend', homeBtnHTML);
}

inserirHomeBtn();

const homeBtn = document.querySelector('.home-btn');

const goHome = () => {
  window.location.href = '/index.html';
}

homeBtn.addEventListener('click', goHome);


card1.addEventListener('click', () => {
  window.location.href = '/pages/xbox.html';
});

card2.addEventListener('click', () => {
  window.location.href = '/pages/spotify.html';
});

card3.addEventListener('click', () => {
  window.location.href = '/pages/settings.html';
});

card4.addEventListener('click', () => {
  window.location.href = '/pages/box.html';
});

card5.addEventListener('click', () => {
  window.location.href = '/pages/text.html';
});

card6.addEventListener('click', () => {
  window.location.href = '/pages/sharingan.html';
});

card7.addEventListener('click', () => {
  window.location.href = '/pages/chameleon.html';
});

card8.addEventListener('click', () => {
  window.location.href = '/pages/liquid.html';
});
document.addEventListener("DOMContentLoaded", function () {
  const fixoCard = document.getElementById("fixo-card");
  const movelCard = document.getElementById("movel-card");

  const coresHex = [
    "#08D9D6", "#00BCB1", "#009B8B", "#59F7E7",
    "#4D77FF", "#3865D2", "#2753A6", "#7DABFF",
    "#FF6464", "#D24C52", "#A63741", "#FF8E98",
    "#FF2E63", "#D21D55", "#A61047", "#FF669F",
    "#FF9A00", "#D27800", "#A65700", "#FFB059"
  ];

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  function getRandomColor() {
    return coresHex[Math.floor(Math.random() * coresHex.length)];
  }

  function verificarColisao() {
    const fixoRect = fixoCard.getBoundingClientRect();
    const movelRect = movelCard.getBoundingClientRect();

    if (
      fixoRect.left < movelRect.right &&
      fixoRect.right > movelRect.left &&
      fixoRect.top < movelRect.bottom &&
      fixoRect.bottom > movelRect.top
    ) {
      console.log("🔥 Colisão detectada! Mudando cor do fixoCard...");
      fixoCard.style.fill = getRandomColor(); // Altera o `fill` do fixoCard
    }
  }

  function animate() {
    const x = getRandom(-80, 320);
    const y = getRandom(-200, 250);

    movelCard.style.transform = `translate(${x}px, ${y}px)`;
    verificarColisao();
  }

  setInterval(animate, 500);
});
