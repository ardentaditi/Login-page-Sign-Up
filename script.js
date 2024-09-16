const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('logreg-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});