gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.section__fish2', {
        scrollTrigger: {
            trigger: '.section__fish2',
            toggleActions: 'restart none none none',
            markers: true,
        },
        duration: 3,
        x: '200%',
        y: '100',
        ease: 'power2',
    });
    gsap.to('.section__fishingHook', {
        scrollTrigger: {
            trigger: '.section__fishingHook',
            toggleActions: 'restart none none none',
            markers: true,
        },
        duration: 1.6,
        y: '-100%',
        ease: 'power2',
    }).delay(3.2);
    gsap.to('.section__worm', {
        scrollTrigger: {
            trigger: '.section__worm',
            toggleActions: 'restart none none none',
            markers: true,
        },
        duration: 1.6,
        y: '-1000%',
        ease: 'power2',
    }).delay(3.2);
    gsap.to('.section__fish2', {
        scrollTrigger: {
            trigger: '.section__fish2',
            toggleActions: 'restart none none none',
            markers: true,
        },
        duration: 2.8,
        y: '-100%',
        ease: 'power2',
    }).delay(3.2);
});
