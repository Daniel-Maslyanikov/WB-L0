function calcPrice() {
	const cartItems = document.querySelectorAll('.item__right--in-stock')
	const totalPriceEl = document.querySelector('.total-price')
	

	let totalPrice = 0;

	cartItems.forEach(function (item) {
		const amountEl = item.querySelector('[data-display]');
		const priceEl = item.querySelector('.price');
		const discountEl = item.querySelector('.discount');
		const totalPriceItem = document.querySelector('.price-display')

		const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText.split(/\s+/).join(''));

		const currentDiscount = parseInt(amountEl.innerText) * parseInt(discountEl.innerText.split(/\s+/).join(''))

		totalPrice += currentPrice;
		
		
	})

	totalPriceEl.innerText = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");


}