const hider = document.getElementById('hider');
const hidden = document.getElementById('section');
hidden.style.display = 'block'



hider.onclick = function () {
	if (hidden.style.display == 'block') {
		hidden.style.display = 'none';
		hider.style.transform = 'rotate(180deg)'
	} else if (hidden.style.display == 'none') {
		hidden.style.display = 'block';
		hider.style.transform = 'rotate(180deg)'
	} 

	
	

}