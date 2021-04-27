// GSAP
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.slider', {y: '-100%', duration: 1.5});
tl.to('.intro', {y: '-100%', duration: 1}, '-=1');

tl.fromTo('.hamburger', {opacity: 0}, {opacity: 1, duration: 1});

tl.fromTo('footer', {opacity: 0}, {opacity: 1, duration: 1}, '-=1');
tl.fromTo('footer', {y: '10%'}, {y: '-10%', duration: 1}, '-=1');
