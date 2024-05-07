gsap.registerPlugin(ScrollTrigger);

/*document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.hookFish__fish2', {
        scrollTrigger: {
            trigger: '#section-5',
            toggleActions: 'restart none none none',
            start: 'top',
            markers: true,
        },
        duration: 3,
        x: '500%',
        y: '100',
        ease: 'power2',
    });
    gsap.to('.hookFish__fishHookWorm', {
        scrollTrigger: {
            trigger: '#section-5',
            toggleActions: 'restart none none none',
            start: 'top bottom',
            markers: true,
        },
        duration: 1.6,
        y: '-100%',
        ease: 'power2',
    }).delay(3.2);
    gsap.to('.hookFish__fish2', {
        scrollTrigger: {
            trigger: '#section-5',
            toggleActions: 'restart none none none',
            start: 'top bottom',
            markers: true,
        },
        duration: 0.8,
        y: '-200%',
        ease: 'power2',
    }).delay(3.2);
});*/

const fishing_timeline = gsap.timeline({
    defaults: {
        ease: 'power2',
    },
    scrollTrigger: {
        trigger: '#section5',
        toggleActions: 'restart none none none',
        markers: true,
        start: 'top center',
        end: 'bottom center',
    },
});
fishing_timeline
    .from('.hookFish__fish2', {
        duration: 3,
        x: '500%',
        y: '100',
    })
    .to('.hookFish__fish2', {
        duration: 0.8,
        rotation: 85,
        transformOrigin: 'left 50%',
    })
    .to('.animateHookedFish', {
        duration: 1,
        y: '-200%',
    });
