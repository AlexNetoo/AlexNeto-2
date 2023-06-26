document.addEventListener('DOMContentLoaded', function () {
    const expandIcons = document.querySelectorAll('.expand-icon');

    expandIcons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            const textContainer = this.parentElement.querySelector('.text-container');

            textContainer.classList.toggle('collapsed');
            this.classList.toggle('collapsed');
        });
    });
});

const elements = document.querySelectorAll('.section, .container1, .container2');

function animateElements() {
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('show');
        }, 200 * index); // Adjust the delay as per your preference
    });
}

animateElements();
