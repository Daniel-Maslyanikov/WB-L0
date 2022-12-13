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
  let re = /^[0-9\s]*$/;
  return re.test(String(phone));
}

form.onsubmit = function () {
  let emailVal = inputEmail.value,
    phoneVal = inputPhone.value,
    emptyInputs = Array.from(formInputs).filter((input) => input.value === '');

  formInputs.forEach(function (input) {
    if (input.value === '') {
      input.classList.add('recipient__input--err');
      console.log('input not filled');
    } else {
      input.classList.remove('recipient__input--err');
    }
  });

  if (emptyInputs.length !== 0) {
    console.log('inputs not filled');
    return false;
  }

  if (!validateEmail(emailVal)) {
    console.log('email not valid');
    inputEmail.classList.add('recipient__input--err');
    return false;
  } else {
    inputEmail.classList.remove('recipient__input--err');
  }

	if (!validatePhone(phoneVal)) {
    console.log('phone not valid');
    inputPhone.classList.add('recipient__input--err');
    return false;
  } else {
    inputPhone.classList.remove('recipient__input--err');
  }
};
