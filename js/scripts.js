
// Popup
let findElement = by => {
	return document.querySelector(by);
}

let getElementById = id => {
	return document.getElementById(id);
}

let closePopupAndRedirectToSinglePagePost = () => {
	findElement('.bg-modal').style.display = "none";
	document.location = 'singlePost.html';
}

let showPopupWithMessage = (message, displayState) => {
	findElement('.modal-message').textContent=message;
	findElement('.bg-modal').style.display = displayState;
}

getElementById('btn-rm').addEventListener("click", function() {
	showPopupWithMessage('Are you sure?', 'flex');
});

findElement('#agree').addEventListener("click", function() {
	closePopupAndRedirectToSinglePagePost();
});

findElement('#disagree').addEventListener("click", function() {
	closePopupAndRedirectToSinglePagePost();
});

// Edit button

getElementById('btn-edt').addEventListener("click", function() {
	getElementById("edit-post").setAttribute("contenteditable", "true");
	getElementById("edit-post").focus();
	findElement('.post-info').style.display = "none";
	getElementById('post-options').style.display = "block";
});

getElementById('edit-post').addEventListener("blur", function() {
	showPopupWithMessage('Do you want to save the changes?', 'flex');
	findElement('.post-info').style.display = "inherit";
});

getElementById('save-post').addEventListener("click", function(){
	document.location = 'singlePost.html';
});

getElementById('cancel-post').addEventListener("click", function(){
	document.location = 'singlePost.html';
});
