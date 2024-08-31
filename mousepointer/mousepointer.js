var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");


var isLongPress = false;
var longPressTimer;

main.addEventListener("mousemove", function(dts) {
    gsap.to(cursor, {
        x: dts.x, 
        y: dts.y,
        // ease: "back.out(1.7)",          
    });
});


