const arrowToggles = document.querySelectorAll('.arrow-container');
const chatElements = document.querySelectorAll('.chat .chat-step');

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

function showAnimation(step) {
    const chatElementsCount = chatElements.length;

    if (step <= chatElementsCount) {
        // Lottie animation (chat)
        const currentStepElement = document.getElementById(`step${step}`);
        const animationElement = document.getElementById(`chatTypingAnimation${step}`);
        const staticImageElement = document.getElementById(`chatStepText${step}`);

        currentStepElement.style.display = 'block';

        // Show the Lottie animation
        animationElement.style.display = 'block';

        // Play the Lottie animation
        animationElement.play();

        // Wait for the Lottie animation to complete
        animationElement.addEventListener('complete', () => {
            // Hide the Lottie animation and show the static image
            animationElement.style.display = 'none';
            staticImageElement.style.display = 'block';

            // Animate the next chat message
            showAnimation(step + 1);
        });
    } else {
        // Show projects
        const projectElements = document.querySelectorAll(
            '.section, .container1, .container2'
        );

        setTimeout(() => {
            projectElements.forEach((elementToAnimate) => {
                elementToAnimate.classList.add('show');
            });
        }, 200);
    }
}

listenToExpandDropdownEvents();
showAnimation(1);
