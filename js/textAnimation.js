const paths = document.querySelectorAll('#texto path');
const group = document.querySelector('#texto #gp');


const colours = [
  chroma.scale(['#a6dced', '#00a8e0', '#0d1a53']),
  chroma.scale(['#00a8e0', '#a6dced', '#0d1a53']),
  chroma.scale(['#0d1a53', '#00a8e0', '#a6dced']),
  chroma.scale(['#a6dced', '#0d1a53', '#00a8e0'])
];

let currentGradient = 1;

const tl = gsap.timeline({
  onReverseComplete: () => {
    tl.timeScale(1);
    tl.play(0);
  },
  onComplete: () => {
    tl.timeScale(1.0);
    tl.reverse(0);
  }
});

const tl2 = gsap.timeline({
  onReverseComplete: () => {
    tl.timeScale(1);
    tl.play(0);
  },
  onComplete: () => {
    tl.timeScale(1.0);
    tl.reverse(0);
  }
});



const generatePoints = () => {
  tl.clear();
  group.innerHTML = "";
  let delay = 0;

  paths.forEach(path => {
    
    const length = path.getTotalLength();

    for (let i = 0; i < length; i++) { 
      const pointLength = Math.random() * length;
      const point = path.getPointAtLength(pointLength);

      // Circle

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', point.x);
      circle.setAttribute('cy', point.y);
      circle.setAttribute('r', Math.random() * 0.0001 + 1);
      group.appendChild(circle);

      tl.to(circle, {
        autoRound: false,
        fill: gsap.utils.random(['#a6dced', '#00a8e0', '#b8e994', '#00a854']),
        cx: point.x + ((Math.random() -0.5) * 0.2),
        cy: point.y + (Math.random() -0.7) * 0.1,
        duration: Math.random() * 2,
        delay: (delay + pointLength) * 0.001,
        ease: Power4.easeOut,
      }, 0);
    }
    delay+=length;
  });
  tl.reversed(false).play(0);
  currentGradient++;
}


window.addEventListener('click', () => {
  generatePoints();

});

generatePoints();
