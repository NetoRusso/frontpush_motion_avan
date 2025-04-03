
console.log("chameleon Conectado");

const colorInput =document.getElementById("ch-color");

const chameleonBg = document.getElementById("ch-bg");
const chameleonCorpo = document.getElementById("body");
const chameleonBoca = document.getElementById("mouth");
const chameleonCalda = document.getElementById("tail");
const chameleonDetalhe = document.getElementById("stripe");
const chameleon = document.getElementById("chameleon");

const chameleonIris = document.getElementById("iris");
const chameleonOlho = document.getElementById("eye");

let selectedColor = '#1a1a1a'; 

colorInput.addEventListener("input", (e) => {
  chameleonBg.style.backgroundColor = e.target.value;
});

colorInput.addEventListener("blur", (e) => {
  selectedColor = e.target.value;
  applyColor(selectedColor);
});

chameleon.addEventListener("click", () => {
  chameleon.style.animation = "chameleon 1s ease-in-out";
  setTimeout(() => {
    chameleon.style.animation = "";
  } , 2000);
})

const applyColor = (color) => {
  chameleon.style.animation = "chameleon 2s ease-in-out";

  
  setTimeout(() => {
    chameleonCorpo.style.fill = getDarkerColor(color, 0.6);
    chameleonCalda.style.fill = getDarkerColor(color, 0.7);
    chameleonDetalhe.style.fill = lighterColor(color, 0.6);
    chameleonBoca.style.fill = lighterColor(color, 0.5);

    chameleon.style.animation = "";
  }, 2000); 
};

const getDarkerColor = (color, factor) => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  if (r < 20 || g < 20 || b < 20) {
    chameleon.style.filter = "drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.7))";
  }

  const darkerR = Math.max(0, Math.round(r * (1 - factor)));
  const darkerG = Math.max(0, Math.round(g * (1 - factor)));
  const darkerB = Math.max(0, Math.round(b * (1 - factor)));

  return `#${darkerR.toString(16).padStart(2, '0')}${darkerG.toString(16).padStart(2, '0')}${darkerB.toString(16).padStart(2, '0')}`;
}

const lighterColor = (color, factor) => { 
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  if (r > 220 || g > 220 || b > 220) {
    chameleon.style.filter = "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.4))";
  }

  const lighterR = Math.min(255, Math.round(r + (255 - r) * factor));
  const lighterG = Math.min(255, Math.round(g + (255 - g) * factor));
  const lighterB = Math.min(255, Math.round(b + (255 - b) * factor));

  return `#${lighterR.toString(16).padStart(2, '0')}${lighterG.toString(16).padStart(2, '0')}${lighterB.toString(16).padStart(2, '0')}`;
}

applyColor(selectedColor);


window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const { left, top, width, height } = chameleonOlho.getBoundingClientRect();

  const centerX = left + width / 2;
  const centerY = top + height / 2;

  const deltaX = clientX - centerX;
  const deltaY = clientY - centerY;

  const angle = Math.atan2(deltaY, deltaX);

  const radius = 12;
  const irisX = Math.cos(angle) * radius;
  const irisY = Math.sin(angle) * radius;

  chameleonIris.setAttribute("cx", 757 + irisX);
  chameleonIris.setAttribute("cy", 246 + irisY);


});