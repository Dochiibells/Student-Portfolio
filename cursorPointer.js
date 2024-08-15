const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

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
    const posX = e.clientX;
    const posY = e.clientY;

    // Create the main "SWISH" element
    const swishText = document.createElement("div");
    swishText.textContent = "SWISH";
    swishText.style.position = "absolute";
    swishText.style.left = `${posX}px`;
    swishText.style.top = `${posY}px`;
    swishText.style.fontSize = "55px";
    swishText.style.fontWeight = "bold";
    swishText.style.color = "orange"; // Customize the color
    swishText.style.pointerEvents = "none"; // Prevent interference with other elements

    // Create the first faded background "SWISH" element
    const swishTextFaded1 = document.createElement("div");
    swishTextFaded1.textContent = "SWISH";
    swishTextFaded1.style.position = "absolute";
    swishTextFaded1.style.left = `${posX + 15}px`; 
    swishTextFaded1.style.top = `${posY + 15}px`; 
    swishTextFaded1.style.fontSize = "55px";
    swishTextFaded1.style.fontWeight = "bold";
    swishTextFaded1.style.color = "rgba(255, 0, 0, 0.5)"; 
    swishTextFaded1.style.pointerEvents = "none";

    // Create the second faded background "SWISH" element
    const swishTextFaded2 = document.createElement("div");
    swishTextFaded2.textContent = "SWISH";
    swishTextFaded2.style.position = "absolute";
    swishTextFaded2.style.left = `${posX + 25}px`; 
    swishTextFaded2.style.top = `${posY + 25}px`; 
    swishTextFaded2.style.fontSize = "55px";
    swishTextFaded2.style.fontWeight = "bold";
    swishTextFaded2.style.color = "rgba(255, 192, 203, 0.5)"; 
    swishTextFaded2.style.pointerEvents = "none";

    // Append all elements to the body
    document.body.appendChild(swishTextFaded2);
    document.body.appendChild(swishTextFaded1);
    document.body.appendChild(swishText);

    // Define the animation for all elements
    const animation = [
        { transform: 'translateY(0px)', opacity: 2 },
        { transform: 'translateY(-30px)', opacity: 0 }
    ];

    const animationOptions = { duration: 1000, easing: 'ease-out', fill: 'forwards'};

    // Apply animation to all elements
    swishText.animate(animation, animationOptions);
    swishTextFaded1.animate(animation, animationOptions);
    swishTextFaded2.animate(animation, animationOptions);

    // Remove all elements after the animation is done
    setTimeout(() => {
        swishText.remove();
        swishTextFaded1.remove();
        swishTextFaded2.remove();
    }, 1000);
});
