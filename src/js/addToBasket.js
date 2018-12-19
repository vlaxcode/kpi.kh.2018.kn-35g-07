document.addEventListener("DOMContentLoaded", () => {
    let addButton = document.querySelectorAll('.btn a');
    for (let i = 0; i < addButton.length; i++) {
        addButton[i].addEventListener('click', (event) => {
            event.preventDefault();
            addButton[i].textContent = "Товар в Корзине";
            addButton[i].classList.add('active');
            addButton[i].insertAdjacentHTML('afterbegin', '<i class="fal fa-check"></i>');
        });
    }
    document.querySelector('.notAvailable').addEventListener('mouseover',() => {
        document.querySelector('.notAvailable .btn a').textContent = "Нет в наличии";
    });
});