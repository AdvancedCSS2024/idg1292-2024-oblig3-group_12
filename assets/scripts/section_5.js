gsap.registerPlugin(ScrollTrigger);

/*document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.hookFish__fish2', {
        /*scrollTrigger: {
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
    gsap.to('.hookFish__fish2', {
        duration: 0.6,
        y: '-10%',
        ease: 'power2',
    }).delay(3);
    gsap.to('.hookFish__fish2', {
        duration: 0.6,
        rotation: 85,
        transformOrigin: 'left 50%',
    }).delay(3);
    gsap.to('.hookFish__fishHookWorm', {
        /*scrollTrigger: {
            trigger: '#section-5',
            toggleActions: 'restart none none none',
            start: 'top bottom',
            markers: true,
        },
        duration: 1.6,
        y: '-100%',
        ease: 'power2',
    }).delay(3.1);
    gsap.to('.hookFish__fish2', {
        /*scrollTrigger: {
            trigger: '#section-5',
            toggleActions: 'restart none none none',
            start: 'top bottom',
            markers: true,
        },
        duration: 3,
        y: '-320%',
        ease: 'power2',
    }).delay(3.1);
    gsap.to('.hookFish__fishHookWorm', {
        /*scrollTrigger: {
            trigger: '#section-5',
            toggleActions: 'restart none none none',
            start: 'top bottom',
            markers: true,
        },
        duration: 3,
        y: '0',
        ease: 'power2',
    }).delay(7);
});*/

const fishing_timeline = gsap.timeline({
    repeat: -1,
    /*defaults: {
        toggleActions: 'restart none none none',
    },
    scrollTrigger: {
        trigger: '#section-5',
        start: 'top top',
        end: '200% bottom',
        markers: true,
        onEnter: () => console.log('enter'),
        onLeave: () => console.log('leave'),
        onEnterBack: () => console.log('enter back'),
        onLeaveBack: () => console.log('enter all the way back'),
    },*/
});
fishing_timeline
    .from('.hookFish__fish2', {
        duration: 3,
        x: '500%',
        y: '100',
        ease: 'power2',
    })
    .to('.hookFish__fish2', {
        duration: 0.6,
        y: '-10%',
        ease: 'power2',
    })
    .to(
        '.hookFish__fish2',
        {
            duration: 0.6,
            rotation: 85,
            transformOrigin: 'left 50%',
        },
        '<'
    )
    .to(
        '.hookFish__fishHookWorm',
        {
            duration: 1.6,
            y: '-100%',
            ease: 'power2',
        },
        '<'
    )
    .to(
        '.hookFish__fish2',
        {
            duration: 3,
            y: '-320%',
            ease: 'power2',
        },
        '<'
    )
    .to('.hookFish__fishHookWorm', {
        duration: 3,
        y: '0',
        ease: 'power2',
    });

/*let options = {
        root: document.querySelector("#section5"),
        rootMargin: "0px",
        threshold: 9.0,
      };
      
      let observer = new IntersectionObserver(callback, options);*/
