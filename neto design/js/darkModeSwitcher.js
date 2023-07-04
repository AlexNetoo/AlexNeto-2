const darkModeToggle = document.querySelector('#darkModeToggle');
const avatarImage = document.querySelector('#avatarImage');
const namebaseImage = document.querySelector('#namebaseImage');
const darkModeClass = 'dark-mode';
const avatarImageLightSrc = 'assets/images/avatar2.png';
const avatarImageDarkSrc = 'assets/images/avatar2_dark.jpg';
const namebaseImageLightSrc = 'assets/images/NB2.png';
const namebaseImageDarkSrc = 'assets/images/NB_dark.jpg';
let isDarkModeEnabled = false;

darkModeToggle.addEventListener('click', toggleDarkMode);

/**
 * Handles logic to switch between light and dark modes.
 *
 * Dark mode class is toggled from document's body and `toggleImages` is called.
 */
function toggleDarkMode() {
    document.body.classList.toggle(darkModeClass);
    isDarkModeEnabled = document.body.classList.contains(darkModeClass);

    toggleImages();
}

/**
 * Toggles between dark and light mode images.
 */
function toggleImages() {
    if (isDarkModeEnabled) {
        avatarImage.src = avatarImageDarkSrc;
        namebaseImage.src = namebaseImageDarkSrc;
    } else {
        avatarImage.src = avatarImageLightSrc;
        namebaseImage.src = namebaseImageLightSrc;
    }
}
