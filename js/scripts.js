
// Popup
let findElement = by => {
	return document.querySelector(by);
}

let getElementById = id => {
	return document.getElementById(id);
}

let closePopupAndRedirectTo = page => {
	findElement('.bg-modal').style.display = "none";
	document.location = page;
}

let showPopupWithMessage = (message, displayState) => {
	findElement('.modal-message').textContent=message;
	findElement('.bg-modal').style.display = displayState;
}

getElementById('btn-rm').addEventListener("click", function() {
	showPopupWithMessage('Are you sure?', 'flex');
});

findElement('#agree').addEventListener("click", function() {
	closePopupAndRedirectTo('/home');
});

findElement('#disagree').addEventListener("click", function() {
	closePopupAndRedirectTo('/post');
});

// Edit button

getElementById('btn-edt').addEventListener("click", function() {
	getElementById("btn-back-to-posts").style.display = "none";
	getElementById("btn-edt").style.display = "none";
	getElementById("btn-rm").style.display = "none";
	getElementById("edit-post").setAttribute("contenteditable", "true");
	getElementById("edit-post").focus();
	findElement('.post-info').style.display = "none";
	getElementById('post-options').style.display = "block";
});

getElementById('edit-post').addEventListener("blur", function() {
	getElementById("edit-post").focus();
});

getElementById('save-post').addEventListener("click", function(){
	document.location = '/post';
});

getElementById('cancel-post').addEventListener("click", function(){
	document.location = '/post';
});
