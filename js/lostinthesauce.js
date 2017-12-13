const wrapperEl = document.querySelector('.wrapper');
const numberOfEls = 60;
const duration = 5000;
const delay = duration / numberOfEls;
const gap = 20;

let tl = anime.timeline({
    duration: delay / 2,
    complete: function() {}
});

function createEl(i) {
    let el = document.createElement('div');
    const rotate = (360 / numberOfEls) * i;
    const translateY = -(numberOfEls - i) * .5;
    const hue = Math.round(180 / numberOfEls * i);
    const diameter = gap + (i * gap);
    const scale = (diameter + gap) / diameter;
    el.classList.add('el');
    el.style.zIndex = numberOfEls - i;
    el.style.width = diameter + 'px';
    el.style.height = diameter + 'px';
    el.style.marginTop = -(diameter / 2) + 'px';
    el.style.marginLeft = -(diameter / 2) + 'px';
    el.style.opacity = 0;
    // el.style.color = 'hsl(' + hue + ', 10%, 10%)';
    tl.add({
    begin: function() {
        anime({
        targets: el,
        opacity: [0, 1],
        color: ['white'],
        translateY: [0, translateY],
        rotate: [0, 90],
        borderRadius: {
            value: ['30%', '50%'],
            easing: 'easeInOutQuad'
        },
        easing: 'easeInOutSine',
        direction: 'alternate',
        duration: duration / 4
        });
    }
    });
    wrapperEl.appendChild(el);
};

function initLostAnimation() {
    for (let i = 0; i < numberOfEls; i++) createEl(i);
}
