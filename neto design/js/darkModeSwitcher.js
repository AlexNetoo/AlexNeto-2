const darkModeToggle = document.querySelector('#darkModeToggle');
const avatarImage = document.querySelector('#avatarImage');
const namebaseImage = document.querySelector('#namebaseImage');
const chatTypingAnimation1 = document.querySelector('#chatTypingAnimation1');
const chatTypingAnimation2 = document.querySelector('#chatTypingAnimation2');
const chatTypingAnimation3 = document.querySelector('#chatTypingAnimation3');
const chatTypingAnimation4 = document.querySelector('#chatTypingAnimation4');
const chatStepText1 = document.querySelector('#chatStepText1');
const chatStepText2 = document.querySelector('#chatStepText2');
const chatStepText3 = document.querySelector('#chatStepText3');
const chatStepText4 = document.querySelector('#chatStepText4');

const darkModeClass = 'dark-mode';

const avatarImageLightSrc = 'assets/images/round Avatar light.svg';
const avatarImageDarkSrc = 'assets/images/round Avatar dark.svg';

const namebaseImageLightSrc = 'assets/images/NBlogo.jpg';
const namebaseImageDarkSrc = 'assets/images/NB_dark.jpg';

const typingAnimationLightSrc = 'assets/lottie/typing-animation-light.json';
const typingAnimationDarkSrc = 'assets/lottie/typing-animation-dark.json';

const chatStep1LightSrc = 'assets/images/1.svg';
const chatStep2LightSrc = 'assets/images/2.svg';
const chatStep3LightSrc = 'assets/images/3.svg';
const chatStep4LightSrc = 'assets/images/4.svg';

const chatStep1DarkSrc = 'assets/images/1 dark.svg';
const chatStep2DarkSrc = 'assets/images/2 dark.svg';
const chatStep3DarkSrc = 'assets/images/3 dark.svg';
const chatStep4DarkSrc = 'assets/images/4 dark.svg';

let isDarkModeEnabled = false;

darkModeToggle.addEventListener('click', toggleDarkMode);

/**
 * Handles logic to switch between light and dark modes.
 *
 * Dark mode class is toggled from document's body and `toggleImages` and `toggleChatAnimations` is called.
 */
function toggleDarkMode() {
    document.body.classList.toggle(darkModeClass);
    isDarkModeEnabled = document.body.classList.contains(darkModeClass);

    toggleImages();
    toggleChatAnimations();
}

/**
 * Toggles between dark and light mode images.
 */
function toggleImages() {
    if (isDarkModeEnabled) {
        avatarImage.src = avatarImageDarkSrc;
        namebaseImage.src = namebaseImageDarkSrc;
        // Chat text
        chatStepText1.src = chatStep1DarkSrc;
        chatStepText2.src = chatStep2DarkSrc;
        chatStepText3.src = chatStep3DarkSrc;
        chatStepText4.src = chatStep4DarkSrc;
        // Chat typing
        chatTypingAnimation1.src =
            chatTypingAnimation2.src =
            chatTypingAnimation3.src =
            chatTypingAnimation4.src =
                typingAnimationDarkSrc;
    } else {
        avatarImage.src = avatarImageLightSrc;
        namebaseImage.src = namebaseImageLightSrc;
        // Chat text
        chatStepText1.src = chatStep1LightSrc;
        chatStepText2.src = chatStep2LightSrc;
        chatStepText3.src = chatStep3LightSrc;
        chatStepText4.src = chatStep4LightSrc;
        // Chat typing
        chatTypingAnimation1.src =
            chatTypingAnimation2.src =
            chatTypingAnimation3.src =
            chatTypingAnimation4.src =
                typingAnimationLightSrc;
    }
}

/**
 * Toggles between dark and light mode animations for chat steps.
 */
function toggleChatAnimations() {
    if (isDarkModeEnabled) {
        loadAnimation(typingAnimationDarkSrc, 'chatTypingAnimation1');
        loadAnimation(typingAnimationDarkSrc, 'chatTypingAnimation2');
        loadAnimation(typingAnimationDarkSrc, 'chatTypingAnimation3');
        loadAnimation(typingAnimationDarkSrc, 'chatTypingAnimation4');
    } else {
        loadAnimation(typingAnimationLightSrc, 'chatTypingAnimation1');
        loadAnimation(typingAnimationLightSrc, 'chatTypingAnimation2');
        loadAnimation(typingAnimationLightSrc, 'chatTypingAnimation3');
        loadAnimation(typingAnimationLightSrc, 'chatTypingAnimation4');
    }
}

/**
 * Loads a Lottie animation into an HTML element with the specified ID.
 *
 * @param {string} animationSrc The URL of the Lottie animation JSON file.
 * @param {string} elementId The ID of the HTML element where the animation should be displayed.
 */
function loadAnimation(animationSrc, elementId) {
    const animationContainer = document.getElementById(elementId);

    // Load the new animation
    animationContainer.load(animationSrc);
}
