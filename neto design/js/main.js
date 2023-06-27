const arrowToggles = document.querySelectorAll('.arrow-container');
const elements = document.querySelectorAll('.section, .container1, .container2');

function listenToExpandDropdownEvents() {
    arrowToggles.forEach((arrowContainer) => {
        arrowContainer.addEventListener('click', () => {
            const targetId = arrowContainer.getAttribute('data-target');
            const target = document.querySelector(`#${targetId}`);
            const expandIcon = arrowContainer.children[0];

            target.classList.toggle('show');
            expandIcon.classList.toggle('active');
        });
    });
}

function animateElements() {
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('show');
        }, 200 * index); // Adjust the delay as per your preference
    });
}

animateElements();
listenToExpandDropdownEvents();
