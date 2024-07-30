const handleClick = (event: MouseEvent): void => {
  event.clientX
  console.log('Kliknuto');
};

const button: HTMLButtonElement = document.querySelector('button');
button.addEventListener('click', handleClick);

const handleSubmit = (event: SubmitEvent): void => {
  event.preventDefault();
  const form = event.target as HTMLFormElement; //pretypovani, v tomto pripade to nejde udelat jinak
};

const checkPasswordStrength = (password: string): string => {
  if (password === '') {
    return 'weak';
  }

  if (password.length < 12) {
    return 'weak';
  }

  return 'strong';
};

document.querySelector('#savepass-btn').addEventListener('click', (e) => {
  const inputElement: HTMLInputElement = document.querySelector('#password-input');
  const userPassword: string = inputElement.value;
  if (checkPasswordStrength(userPassword) === 'weak') {
    document.body.innerHTML = '<p>Příliš slabé heslo</p>';
  } else {
    document.body.innerHTML = '<p>Heslo uloženo</p>';
  }
});
