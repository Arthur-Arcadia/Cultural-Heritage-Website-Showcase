document.addEventListener("DOMContentLoaded", () => {
    const flipButtons = document.querySelectorAll("button");
    flipButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const card = btn.closest(".card");
            card.classList.add("flipped");
        });
    });

    const containers = document.querySelectorAll(".card-container");
    containers.forEach((container) => {
        container.addEventListener("mouseleave", () => {
            const card = container.querySelector(".card");
            card.classList.remove("flipped");
        });
    });
});

