// console.log('Liquid conectado');

// const movel = document.querySelector('.movel');
// const fixo = document.querySelector('.fixo');
// const texto = document.querySelector('#texto');

// let mouseX = 0;
// let mouseY = 0;

// document.addEventListener('mousemove', (e) => {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
// });

// function updateMovel() {
//     movel.style.left = `${mouseX}px`;
//     movel.style.top = `${mouseY - movel.offsetHeight - 20}px`;

//     const movelRect = movel.getBoundingClientRect();
//     const fixoRect = fixo.getBoundingClientRect();
//     const textoRect = texto.getBoundingClientRect();

//     const isOverlappingFixo = isOverlapping(movelRect, fixoRect);
//     const isOverlappingTexto = isOverlapping(movelRect, textoRect);

//     if (isOverlappingFixo) {
//         applyScaleEffect(fixo, 1.2);
//     } else {
//         resetScaleEffect(fixo);
//     }

//     if (isOverlappingTexto) {
//         applyScaleEffect(texto, 0.9);
//     } else {
//         resetScaleEffect(texto);
//     }

//     requestAnimationFrame(updateMovel);
// }

// function isOverlapping(rect1, rect2) {
//     return !(
//         rect1.right < rect2.left ||
//         rect1.left > rect2.right ||
//         rect1.bottom < rect2.top ||
//         rect1.top > rect2.bottom
//     );
// }

// function applyScaleEffect(element, scale) {
//     element.style.transform = 'scale(scale)';
// }

// function resetScaleEffect(element) {
//     element.style.transform = 'scale(1)';
// }

// updateMovel();
console.log('Liquid conectado');

const movel = document.querySelector('.movel');
const fixo = document.querySelector('.fixo');
const texto = document.querySelector('#texto');

let mouseX = 0;
let mouseY = 0;

const cores = [
  "#08D9D6", "#00BCB1", "#009B8B", "#59F7E7",
  "#4D77FF", "#3865D2", "#2753A6", "#7DABFF",
  "#FF6464", "#D24C52", "#A63741", "#FF8E98",
  "#FF2E63", "#D21D55", "#A61047", "#FF669F",
  "#FF9A00", "#D27800", "#A65700", "#FFB059"
];
let ultimaCorFixo = fixo.style.backgroundColor || getRandomColor(); // Inicializa com uma cor aleatória

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function updateMovel() {
    movel.style.left = `${mouseX}px`;
    movel.style.top = `${mouseY - movel.offsetHeight - 20}px`;

    const movelRect = movel.getBoundingClientRect();
    const fixoRect = fixo.getBoundingClientRect();
    const textoRect = texto.getBoundingClientRect();

    const isOverlappingFixo = isOverlapping(movelRect, fixoRect);
    const isOverlappingTexto = isOverlapping(movelRect, textoRect);

    if (isOverlappingFixo) {
        applyEffects(fixo, 1.2);
    } else {
        resetEffects(fixo);
    }

    if (isOverlappingTexto) {
        applyScaleEffect(texto, 0.9);
    } else {
        resetScaleEffect(texto);
    }

    requestAnimationFrame(updateMovel);
}

function isOverlapping(rect1, rect2) {
    return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );
}

function applyEffects(element, scale) {
    element.style.transform = `scale(${scale})`;
    if (element === fixo) {
        ultimaCorFixo = getRandomColor();
        element.style.backgroundColor = ultimaCorFixo;
    }
}

function resetEffects(element) {
    element.style.transform = 'scale(1)';
    if (element === fixo) {
        element.style.backgroundColor = ultimaCorFixo; 
    }
}

function applyScaleEffect(element, scale) {
    element.style.transform = `scale(${scale})`;
}

function resetScaleEffect(element) {
    element.style.transform = 'scale(1)';
}

function getRandomColor() {
    return cores[Math.floor(Math.random() * cores.length)];
}

updateMovel();
