const inStockHider = document.getElementById('hider-in-stock');
const inStock = document.getElementById('in-stock');
inStock.style.display = 'block';

const outOfStockHider = document.getElementById('hider-out-of-stock');
const outOfStock = document.getElementById('out-of-stock');
outOfStock.style.display = 'block';



outOfStockHider.onclick = function () {
	if (outOfStock.style.display == 'block') {
		outOfStock.style.display = 'none';
		outOfStockHider.style.transform = 'rotate(180deg)'
	} else if (outOfStock.style.display == 'none') {
		outOfStockHider.style.transform = 'rotate(360deg)'
		outOfStock.style.display = 'block';
		
	} 
}

inStockHider.onclick = function () {
	if (inStock.style.display == 'block') {
		inStock.style.display = 'none';
		inStockHider.style.transform = 'rotate(180deg)'
	} else if (inStock.style.display == 'none') {
		inStockHider.style.transform = 'rotate(360deg)'
		inStock.style.display = 'block';
		
	} 
}