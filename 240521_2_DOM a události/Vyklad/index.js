const handleClick = (event) => {
    event.clientX;
    console.log('Kliknuto');
};
const button = document.querySelector('button');
button.addEventListener('click', handleClick);
const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target; //pretypovani, v tomto pripade to nejde udelat jinak
};
const checkPasswordStrength = (password) => {
    if (password === '') {
        return 'weak';
    }
    if (password.length < 12) {
        return 'weak';
    }
    return 'strong';
};
document.querySelector('#savepass-btn').addEventListener('click', (e) => {
    const inputElement = document.querySelector('#password-input');
    const userPassword = inputElement.value;
    if (checkPasswordStrength(userPassword) === 'weak') {
        document.body.innerHTML = '<p>Příliš slabé heslo</p>';
    }
    else {
        document.body.innerHTML = '<p>Heslo uloženo</p>';
    }
});
