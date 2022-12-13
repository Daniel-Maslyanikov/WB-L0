window.addEventListener('click', function (event) {
  if (event.target.dataset.action === 'plus') {
    const counterItem = event.target.closest('.item__counter');
    const counter = counterItem.querySelector('[data-display]');
		const amount = event.target.closest('.item__interaction').querySelector('.amount')
		
	
    if (amount) {
			if (parseInt(counter.innerText) < parseInt(amount.innerText)) {
				counter.innerText = ++counter.innerText;
			} 
		} else {
			counter.innerText = ++counter.innerText;
		}
		calcPrice()
  }

  if (event.target.dataset.action === 'minus') {
    const counterItem = event.target.closest('.item__counter');
    const counter = counterItem.querySelector('[data-display]');

    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    }
		calcPrice()
  }
});
