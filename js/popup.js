
document.getElementById('btn').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('#agree').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});

document.querySelector('#disagree').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});
