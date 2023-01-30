let products = [
  {
    id: 0,
    // checkbox: 't-shirt',
    checkboxValue: false,
    name: 'Футболка UZcotton мужская',
    price: 522,
    discount: 1051,
    totalPrice: 522,
    totalDiscount: 1051,
    amount: 2,
    image: './img/t-shirt.png',
    currentAmount: 1,
    color: 'Белый',
    size: 56,
    point: 'Коледино WB',
    ooo: 'ООО Вайлдберриз',
    ogrn: 5167746237148,
    address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34',
  },
  {
    id: 1,
    // checkbox: 'phone',
    checkboxValue: false,
    name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
    price: 1000,
    discount: 2010,
    totalPrice: 1000,
    totalDiscount: 2010,
    amount: 1000,
    image: './img/phone.png',
    currentAmount: 1,
    color: 'Прозрачный',
    size: null,
    point: 'Коледино WB',
    ooo: 'ООО Мегапрофиль',
    ogrn: 5161111237148,
    address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34',
  },
  {
    id: 2,
    // checkbox: 'pencils',
    checkboxValue: false,
    name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные,Faber-Castell',
    price: 494,
    discount: 950,
    totalPrice: 494,
    totalDiscount: 950,
    amount: 2,
    image: './img/pencils.png',
    currentAmount: 1,
    color: null,
    size: null,
    point: 'Коледино WB',
    ooo: 'ООО Вайлдберриз',
    ogrn: 5167324537148,
    address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34',
  },
];

let price = {
  total: 0,
  full: 0,
  sale: 0,
};

let checkIsAll = false

const checkIsAllObj = document.getElementById('all')

let favorite = `<svg class="fav" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.03396 4.05857C2.26589 4.75224 1.76684 5.83284 1.99493 7.42928C2.22332 9.02783 3.26494 10.6852 4.80436 12.3478C6.25865 13.9184 8.10962 15.4437 9.99996 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.735 10.6852 17.7766 9.02783 18.005 7.4293C18.233 5.83285 17.734 4.75224 16.9659 4.05856C16.1766 3.34572 15.055 3 14 3C12.1319 3 11.0923 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1582 5.04882 9.84166 5.04882 9.6464 4.85355C9.59641 4.80356 9.54182 4.7466 9.48224 4.68443C8.90757 4.08479 7.86797 3 5.99995 3C4.94495 3 3.82325 3.34573 3.03396 4.05857ZM2.36371 3.31643C3.37369 2.40427 4.75202 2 5.99995 2C8.07123 2 9.34539 3.11257 9.99996 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2668 5.66715 18.9949 7.5707C18.7233 9.47217 17.5149 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87773 18.0333 9.69995 17.9C7.69353 16.3952 5.66443 14.7485 4.0706 13.0272C2.48503 11.3148 1.27665 9.47217 1.00498 7.57072C0.733012 5.66716 1.33249 4.24776 2.36371 3.31643Z"/>
</svg>`;

let trashCan = `<svg class="trash-can" width="20" height="20" viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"/>
</svg>`;

let items = document.getElementById('items');

function renderItem(products, index) {
  return `
	<div class="product__item" data-key="${products.id}">
		<div class="item__left">
			<div class="item__info">
				<div class="product__label">
					<input class="in-stock__checkbox" data-product-set="${products.id}" type="checkbox" onChange="checkbkoxHandler(${products.id})" id="${
    products.id
  }" />
					<label for="${products.id}"></label>
				</div class="pic--mobile">
				<div class="checkbox--mobile">
					<input class="in-stock__checkbox" data-product-set="${products.id}" type="checkbox" onChange="checkbkoxHandler(${products.id})" id="${
    products.id
  }--mobile" />
					<label for="${products.id}--mobile"></label>
				</div>
				<img class="item__pic" src=${products.image} alt="T-shirt" />
				<div class="item-info">
					<p class="item__name">${products.name}</p>
					<div class="item__param">
						${colorRender(products, products.color)}
						${sizeRender(products, products.size)}
					</div>
					<div class="item__address">
						<p class="text--gray">${products.point}</p>
						<div class="item__comp">
							<p class="text--gray">${products.ooo}</p>
							<div class="info">
								<img src="./img/icon-i.svg" alt="i" />
								<div class="info-popup">
									<h3 class="heading--tertiary">${products.ooo}</h3>
									<p class="text--tertiary">ОГРН: ${products.ogrn}</p>
									<p class="text--tertiary">${products.address}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="item__right item__right--in-stock">
			<div class="item__interaction">
				<div class="item__counter">
					<button class="item__button" data-action="minus" onClick="decrementCounter(${index}, ${
    products.id
  })">−</button>
					<div class="item__counter-display" data-display>${products.currentAmount}</div>
					<button class="item__button item__button--increase" data-action="plus" onClick="incrementCounter(${index} ,${
    products.id
  })">+</button>
				</div>
				<div class="interaction__bottom">
				${amountRender(products, products.amount)}
					<div class="item__icons">
						${favorite}
						${trashCan}
					</div>
				</div>
			</div>
			<div class="item__price">
				<p class="price"><span class="price-display">${
          products.price * products.currentAmount
        }</span> <span class="currency">com</span></p>
				<div class="discount-popup">
				<p class="discount"><span class="discount-price">${products.discount}</span> com</p>
				<div class="discount-popup-content">
					<div class="discount-popup-content--left">
						<p class="text--gray">Скидка 55%</p>
						<p class="text--gray">Скидка покупателя 10%</p>
					</div>
					<div class="discount-popup-content--right">
						<p class="text--tertiary">−300 сом</p>
						<p class="text--tertiary">−30 сом</p>
					</div>
				</div>
			</div>
		</div>
	</div>
    `;
}

function viewCounter(key) {
  let currentObj = Array.from(document.getElementsByClassName('product__item'));
  currentObj.forEach((elem) => {
    if (elem.getAttribute('data-key') == key) {
      elem.querySelector('.item__counter-display').textContent = products[key].currentAmount;
    }
  });
}

function viewPrice(key) {
  let currentObj = Array.from(document.getElementsByClassName('product__item'));
  currentObj.forEach((elem) => {
    if (elem.getAttribute('data-key') == key) {
      elem.querySelector('.price-display').textContent = products[key].totalPrice;
    }
  });
}

function viewDiscount(key, product) {
  let currentObj = Array.from(document.getElementsByClassName('product__item'));
  currentObj.forEach((elem) => {
    if (elem.getAttribute('data-key') == key) {
      elem.querySelector('.discount-price').textContent = products[key].totalDiscount;
    }
  });
}

function changeAllCheckboxHandler() {
  checkIsAll = !checkIsAll
  products.forEach((item) => {
    const checkboxObj = document.querySelector(`[data-product-set="${item.id}"]`)
    
    if (item.checkboxValue && checkIsAll) {
      // !ниче не делаем
    }
    
    if (!item.checkboxValue && checkIsAll) {
      item.checkboxValue = true;
      checkboxObj.checked = true
      price.total += item.totalPrice
			price.full += item.totalDiscount
			price.sale += item.totalDiscount - item.totalPrice

    }

    if (item.checkboxValue && !checkIsAll) {
      item.checkboxValue = false;
      checkboxObj.checked = false
      price.total -= item.totalPrice
			price.full -= item.totalDiscount
			price.sale -= item.totalDiscount - item.totalPrice
    
    }
    
    viewTotalPrice(item);
  })
}

function incrementCounter(index, key) {
  if (products[index].currentAmount < products[index].amount) {
    products[index].currentAmount = ++products[index].currentAmount;

    if (products[index].checkboxValue) {
      price.total += products[index].price
			price.full += products[index].discount
			price.sale += products[index].discount - products[index].price
    }
  }


  products[index].totalPrice = products[index].currentAmount * products[index].price;
  products[index].totalDiscount = products[index].currentAmount * products[index].discount;

  viewTotalPrice();
  viewCounter(key);
  viewPrice(key);
  viewDiscount(key);
}

function decrementCounter(index, key) {
  if (products[index].currentAmount <= 1) return null;
  products[index].currentAmount = --products[index].currentAmount;

  if (products[index].checkboxValue) {
    price.total -= products[index].price
		price.full -= products[index].discount
		price.sale -= products[index].discount - products[index].price
  }

  products[index].totalPrice -= products[index].price;
  products[index].totalDiscount -= products[index].discount;
	

  viewTotalPrice();
  viewCounter(key);
  viewPrice(key);
  viewDiscount(key);
}

function amountRender(obj, amount) {
  if (amount > 5) return '<p></p>';
  return `<p>Осталось <span class="amount">${obj.amount}</span> шт.</p>`;
}

function colorRender(obj, color) {
  if (!color) return '';
  return `<p>Цвет: ${obj.color}</p>`;
}

function sizeRender(obj, size) {
  if (!size) return '';
  return `<p>Размер: ${obj.size}</p>`;
}

function checkAllCheckboxes() {
  let isAll = true
  products.forEach((item, i) => {
    if (!item.checkboxValue) {
      isAll = false
    } 
  })
  return isAll
}

function checkbkoxHandler(itemId) {
  
  products.forEach((item, i) => {
    if (item.id === itemId) {
      const checkboxObj = document.querySelector(`[data-product-set="${itemId}"]`)
      item.checkboxValue = !item.checkboxValue;
      
      // TODO: price total and price full
      if (item.checkboxValue) {
        checkboxObj.checked = true
        price.total += item.totalPrice
				price.full += item.totalDiscount
				price.sale += item.totalDiscount - item.totalPrice
        
        checkIsAll = checkIsAllObj.checked = checkAllCheckboxes()
      } else {
        checkboxObj.checked = false
        price.total -= item.totalPrice
        price.full -= item.totalDiscount
				price.sale -= item.totalDiscount - item.totalPrice

        checkIsAll = checkIsAllObj.checked = false
      }
      
      viewTotalPrice(item);
    }
  });
}

function viewTotalPrice() {
  const totalPriceObj = document.querySelectorAll('[data-total-price]');
  const totalFullPriceObj = document.querySelectorAll('[data-total-full-price]');
  const totalSalePriceObj = document.querySelectorAll('[data-total-sale-price]');

  totalPriceObj.forEach((item) => {
    item.textContent = price.total;
  });
  totalFullPriceObj.forEach((item) => {
    item.textContent = price.full;
  });
  totalSalePriceObj.forEach((item) => {
    item.textContent = price.sale;
  });
}

window.addEventListener('DOMContentLoaded', () => {
  products.forEach((elem, index) => {
    let rendererItem = renderItem(elem, index);
    items.insertAdjacentHTML('beforeend', rendererItem);
  });
});
