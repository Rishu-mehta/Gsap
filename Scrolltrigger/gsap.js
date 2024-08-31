// gsap.from(".page2 .box", {
//     scale: 0,  // Corrected from 'scales' to 'scale'
//     duration: 2,
    
//     // scrollTrigger:".page2 .box",
    
    
// });
gsap.to(".page2 h1",{
    transform:"translateX(-100%)",
    scrollTrigger:{
    trigger:(".page2"),
    scroller:("body"),
    markers:true,
    start:"top 0%",
    end:"top -100%",
    scrub:5,
    pin:true
   }
});