let form = document.querySelector('.section__recipient'),
  formInputs = document.querySelectorAll('.recipient__input'),
  inputEmail = document.querySelector('.recipient__input-email'),
  inputPhone = document.querySelector('.recipient__input-tel'),
  inoutINN = document.querySelector('.recipient__input-inn');

function validateEmail(email) {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  let re = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm
  return re.test(String(phone));
}

form.onsubmit = function () {
  let emailVal = inputEmail.value,
    phoneVal = inputPhone.value,
    emptyInputs = Array.from(formInputs).filter((input) => input.value === '');

  formInputs.forEach(function (input) {
    if (input.value === '') {
      input.classList.add('recipient__input--err');
    } else {
      input.classList.remove('recipient__input--err');
    }
  });

  if (emptyInputs.length !== 0) {
    return false;
  }

  if (!validateEmail(emailVal)) {
    inputEmail.classList.add('recipient__input--err');
    return false;
  } else {
    inputEmail.classList.remove('recipient__input--err');
  }

  if (!validatePhone(phoneVal)) {
    inputPhone.classList.add('recipient__input--err');
    return false;
  } else {
    inputPhone.classList.remove('recipient__input--err');
  }
};

inputEmail.addEventListener('change', (e) => {
	let emailVal = inputEmail.value
  if (!validateEmail(emailVal)) {
    inputEmail.classList.add('recipient__input--err');
    return false;
  } else {
    inputEmail.classList.remove('recipient__input--err');
  }
});

inputPhone.addEventListener('change', (e) => {
	let phoneVal = inputPhone.value
  if (!validatePhone(phoneVal)) {
    inputPhone.classList.add('recipient__input--err');
    return false;
  } else {
    inputPhone.classList.remove('recipient__input--err');
  }
});