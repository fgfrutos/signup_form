const password = document.querySelectorAll('input[type="password"]');
const errorText = document.querySelector('.label-input > p');
const submitBtn = document.querySelector('button');

const checkEqual = (e) => {
    if (password[0].value !== password[1].value) {
        errorText.textContent = '* Password do not mach'
        password.forEach(input => input.classList.add('invalid'));
        e.preventDefault();
    }
}

submitBtn.addEventListener('click', checkEqual);