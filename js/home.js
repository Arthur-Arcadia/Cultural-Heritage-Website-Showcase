import { initButtonPressEffect } from "./modules/button.js";

document.addEventListener('DOMContentLoaded', () => {
    initButtonPressEffect();
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            cards.forEach(c => c.classList.remove('hovered'));
            card.classList.add('hovered');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('hovered');
        });
    });
});