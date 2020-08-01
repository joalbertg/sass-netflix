const inputs =  document.querySelectorAll('form .campo input');

const validarInput = event => {
  const target = event.target;
  const state = ['valid', 'invalid'];

  let className;
  if(target.value.length === 0) {
    className = state[1];
  } else {
    className = state[0];
  }

  target.classList.remove(...state);
  target.nextElementSibling.classList.remove(...state);
  target.classList.add(className);
  target.nextElementSibling.classList.add(className);

  if(className === 'invalid') {
    // next element (input) with .campo field
    if(target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
      const errorDiv = document.createElement('div');

      errorDiv.appendChild(document.createTextNode('Este campo es obligatorio'));
      errorDiv.classList.add('alerta');

      target.parentElement.parentElement.insertBefore(errorDiv, target.parentElement.nextElementSibling);
    }
  } else if(target.parentElement.nextElementSibling.classList[0] === 'alerta') {
    target.parentElement.nextElementSibling.remove();
  }
}

inputs.forEach(input => {
  input.addEventListener('blur', validarInput);
  input.addEventListener('input', validarInput);
});

const showPasswordBtn = document.querySelector('form .campo span');

showPasswordBtn.addEventListener('click', event => {
  const passwordInput = document.querySelector('#password');

  if(passwordInput.getAttribute('type') === 'password') {
    passwordInput.setAttribute('type', 'text');
    event.target.textContent = 'ocultar';
  } else {
    passwordInput.setAttribute('type', 'password');
    event.target.textContent = 'mostrar';
  }
});
