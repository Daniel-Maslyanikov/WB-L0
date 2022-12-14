let form = document.querySelector('.section__recipient'),
  formInputs = document.querySelectorAll('.recipient__input'),
  inputEmail = document.querySelector('.recipient__input-email'),
  inputPhone = document.querySelector('.recipient__input-tel'),
  inputINN = document.querySelector('.recipient__input-inn'),
	inputName = document.querySelector('.recipient__input-name'),
	inputSurname = document.querySelector('.recipient__input-surname');

function validateEmail(email) {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  let re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  return re.test(String(phone));
}

function validateName(name) {
  let re = /^([a-zа-яё]+[\s]{0,1}[a-zа-яё]+[\s]{0,1}[a-zа-яё]+)$/ig;
  return re.test(String(name).toLowerCase());
}

function validateSurname(surname) {
  let re = /^([a-zа-яё]+[\s]{0,1}[a-zа-яё]+[\s]{0,1}[a-zа-яё]+)$/ig;
  return re.test(String(surname).toLowerCase());
}

function validateINN(inn) {
  let re = /^[0-9]*$/;
  return re.test(String(inn));
}

form.onsubmit = function () {
  let emailVal = inputEmail.value,
    phoneVal = inputPhone.value,
		innVal = inputINN.value,
		nameVal = inputName.value,
		surnameVal = inputSurname.value,
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

	if (!validateINN(innVal)) {
    inputINN.classList.add('recipient__input--err');
    return false;
  } else {
    inputINN.classList.remove('recipient__input--err');
  }
};

inputName.addEventListener('change', (e) => {
	let nameVal = inputName.value
  if (!validateName(nameVal)) {
    inputName.classList.add('recipient__input--err');
    return false;
  } else {
    inputName.classList.remove('recipient__input--err');
  }
});

inputSurname.addEventListener('change', (e) => {
	let surnameVal = inputSurname.value
  if (!validateSurname(surnameVal)) {
    inputSurname.classList.add('recipient__input--err');
    return false;
  } else {
    inputSurname.classList.remove('recipient__input--err');
  }
});

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

inputINN.addEventListener('change', (e) => {
	let innVal = inputINN.value
  if (!validateINN(innVal)) {
    inputINN.classList.add('recipient__input--err');
    return false;
  } else {
    inputINN.classList.remove('recipient__input--err');
  }
});

