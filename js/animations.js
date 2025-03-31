const paths = document.querySelectorAll('#NetoRusso path');
const group = document.querySelector('#NetoRusso #group');

const colours = [
    chroma.scale(['#a6dced', '#00a8e0', '#0d1a53']),
    chroma.scale(['#00a8e0', '#a6dced', '#0d1a53']),
    chroma.scale(['#0d1a53', '#00a8e0', '#a6dced']),
    chroma.scale(['#a6dced', '#0d1a53', '#00a8e0'])
];

let currentGradient = 0;

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

function generatePoints() {
    tl.clear();
    group.innerHTML = '';
    let delay = 0;
    paths.forEach(path => {
        const length = path.getTotalLength();
        for (let i = 0; i < length; i += 1) {
            const pointLength = Math.random() * length;
            const point = path.getPointAtLength(pointLength);
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

            circle.setAttribute("cx", point.x);
            circle.setAttribute("cy", point.y);
            circle.setAttribute("r", Math.random() * 0.5 + 1);

            const color = colours[currentGradient % colours.length](Math.random()).hex();

            tl.to(circle, {
                fill: color,
                cx: point.x + (Math.random() - 0.7) * 3,
                cy: point.y + (Math.random() - 0.5) * 3,
                duration: Math.random() * 5 + 1,
                delay: delay + pointLength * 0.001,
                ease: 'power4.out'
            }, 0);

            group.appendChild(circle);
        }
        delay += length * 0.001;
    });
    tl.reversed(false).play(0);
    currentGradient++;
}

window.addEventListener('click', () => {
    generatePoints();
});

generatePoints();