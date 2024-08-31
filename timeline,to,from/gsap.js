var tl = gsap.timeline()

tl.from(".brand h1",{
    y:-30,
    duration:1,
    dalay:1,
    opacity:0

})
tl.from(".navigations ul li",{
    y:-30,
    duration:0.5,
    opacity:0,
    stagger:0.2

})
tl.from(".hero-section h1",{
    y:20,
    opacity:0,  
    scale:0.2,
    duration:1
})