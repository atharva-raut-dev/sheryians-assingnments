const container = document.querySelector(".product-container");
const glow = document.querySelector(".mouse-glow");
const jacket = document.querySelector(".product-image");

container.addEventListener("mousemove", (e) => {

    const rect = container.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

   const moveX = (x - centerX) * 0.10;
const moveY = (y - centerY) * 0.10;

    glow.style.transform =
        `translate(calc(-50% + ${moveX}px),
                   calc(-50% + ${moveY}px))`;

    jacket.style.transform =
        `translate(${moveX * 0.3}px, ${moveY * 0.3}px)
         scale(1.1)`;
});

container.addEventListener("mouseleave", () => {

    glow.style.transform =
        "translate(-50%, -50%)";

    jacket.style.transform =
        "translate(0px,0px) scale(1.1)";
});