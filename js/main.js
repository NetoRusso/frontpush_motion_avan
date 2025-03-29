function criarHomeBtn() { 
  return `<img class="home-btn" src="/svg/home.svg" alt="icon de home"/>`
}

console.log("conectado");
const main = document.querySelector('main');
const card1 = document.querySelector('.content-home-cards-1');

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

  console.log("clicou");
});






