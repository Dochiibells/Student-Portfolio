const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
const swishText = document.getElementById("swish-text");
const swishTextFaded1 = document.getElementById("swish-text-faded1");
const swishTextFaded2 = document.getElementById("swish-text-faded2");

//Costum pointer.
window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// SWISH effect.
window.addEventListener("click", function(e) {
    const posX = e.pageX;
    const posY = e.pageY;

    // Set the positions of the text elements
    swishText.style.left = `${posX}px`;
    swishText.style.top = `${posY}px`;
    swishTextFaded1.style.left = `${posX + 15}px`;
    swishTextFaded1.style.top = `${posY + 15}px`;
    swishTextFaded2.style.left = `${posX + 25}px`;
    swishTextFaded2.style.top = `${posY + 25}px`;

    // Animate the text elements
    const animation = [
        { transform: 'translateY(0px)', opacity: 1 },
        { transform: 'translateY(-30px)', opacity: 0 }
    ];

    const animationOptions = { duration: 1000, easing: 'ease-out', fill: 'forwards' };

    swishText.animate(animation, animationOptions);
    swishTextFaded1.animate(animation, animationOptions);
    swishTextFaded2.animate(animation, animationOptions);
});
