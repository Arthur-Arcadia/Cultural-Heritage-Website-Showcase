document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".museum-content");
    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            contents.forEach(section => {
                section.classList.add("hidden");
            });
            document.getElementById(button.dataset.target).classList.remove("hidden");
        });
    });
});

document.querySelectorAll('.exhibit-card img').forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('modal-img');
        modalImg.src = img.src;
        modal.classList.remove('hidden');
    });
});

document.getElementById('image-modal').addEventListener('click', () => {
    document.getElementById('image-modal').classList.add('hidden');
});