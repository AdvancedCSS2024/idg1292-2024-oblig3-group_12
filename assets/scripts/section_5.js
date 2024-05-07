gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.hookFish__fish2', {
        scrollTrigger: {
            scroller: '.container',
            trigger: '#section-5',
            toggleActions: 'restart none none none',
            markers: true,
        },
        duration: 3,
        x: '500%',
        y: '100',
        ease: 'power2',
    });
    gsap.to('.hookFish__fishHookWorm', {
        scrollTrigger: {
            scroller: '.container',
            trigger: '#section-5',
            toggleActions: 'restart none none none',
            markers: true,
        },
        duration: 1.6,
        y: '-100%',
        ease: 'power2',
    }).delay(3.2);
    gsap.to('.hookFish__fish2', {
        scrollTrigger: {
            scroller: '.container',
            trigger: '#section-5',
            toggleActions: 'restart none none none',
            markers: true,
        },
        duration: 0.8,
        y: '-200%',
        ease: 'power2',
    }).delay(3.2);
});

/*const timeline = gsap.timeline({ defaults: { ease: 'power2' } });
timeline
    .from('.hookFish__fish2', {
        scrollTrigger: {
            trigger: '.hookFish__fish2',
            toggleActions: 'restart none none none',
            markers: true,
        },
        duration: 3,
        x: '200%',
        y: '100',
    })
    .to('.animateHookedFish', {
        scrollTrigger: {
            trigger: '.animateHookedFish',
            toggleActions: 'restart none none none',
            markers: true,
        },
        duration: 2,
        y: '-100%',
    });*/
