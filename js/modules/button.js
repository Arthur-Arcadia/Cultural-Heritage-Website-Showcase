export function initButtonPressEffect() {
    const pri_buttons = document.querySelectorAll('.button-primary');
    const sec_buttons = document.querySelectorAll('.button-secondary');

    pri_buttons.forEach(button => {
        button.addEventListener('mousedown', () => {
            button.classList.add('pressed');
        });

        button.addEventListener('mouseup', () => {
            button.classList.remove('pressed');
        });

        button.addEventListener('mouseleave', () => {
            button.classList.remove('pressed');
        });

        button.addEventListener('touchstart', () => {
            button.classList.add('pressed');
        });

        button.addEventListener('touchend', () => {
            button.classList.remove('pressed');
        });
    });

    sec_buttons.forEach(button => {
        button.addEventListener('mousedown', () => {
            button.classList.add('pressed');
        });

        button.addEventListener('mouseup', () => {
            button.classList.remove('pressed');
        });

        button.addEventListener('mouseleave', () => {
            button.classList.remove('pressed');
        });

        button.addEventListener('touchstart', () => {
            button.classList.add('pressed');
        });

        button.addEventListener('touchend', () => {
            button.classList.remove('pressed');
        });
    });
}