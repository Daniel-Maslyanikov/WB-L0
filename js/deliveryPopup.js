const modalDeliveryBtn = document.getElementById('delivery-modal-trigger');
const modalDeliveryBtn2 = document.getElementById('delivery-modal-trigger-total');
const modalDelivery = document.getElementById('delivery-modal');
const modalDeliveryExit = document.getElementById('delivery-exit');

modalDeliveryBtn.onclick = function() {
	modalDelivery.classList.add("open--delivery")
}

modalDeliveryBtn2.onclick = function() {
	modalDelivery.classList.add("open--delivery")
}

modalDeliveryExit.onclick = function() {
	modalDelivery.classList.remove("open--delivery")
}


