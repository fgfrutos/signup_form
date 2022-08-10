const password = document.querySelectorAll('input[type="password"]');
const errorText = document.querySelector('.label-input > p');
const blankSpace = document.querySelector('.space');
const submitBtn = document.querySelector('button');

const checkPassword = (e) => {
    if (password[0].value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/) === null) {
        errorText.textContent = '* Invalid password'
        password[0].classList.add('invalid');
        e.preventDefault();
    } else if (password[0].value !== password[1].value) {
        errorText.textContent = '* Password do not mach'
        password.forEach(input => input.classList.add('invalid'));
        e.preventDefault();
    }

    blankSpace.style.display = 'block';
}

submitBtn.addEventListener('click', checkPassword);