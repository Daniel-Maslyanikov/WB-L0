const checkbox = document.getElementById('payment-mobile');
const submitBtn = document.getElementById('submit');


checkbox.addEventListener('click', function(e) {
	if (checkbox.checked) {
		submitBtn.textContent = `Оплатить ${price.total} сом`
	} else {
		submitBtn.textContent = `Заказать`
	}
}, false)