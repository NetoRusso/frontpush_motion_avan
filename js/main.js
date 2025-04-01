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






