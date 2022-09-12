window.addEventListener('load', ()=> {
    const VLLOAD = gsap.timeline({
        repeat: -1
    })

    VLLOAD
    .from('.vertical-slider p', {y: 100, autoAlpha: 0, stagger: 0.75, duration: 0.75})
    .to('.vertical-slider p', {y: -100, autoAlpha: 0, stagger: 0.75}, 0.75)
})