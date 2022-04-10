window.onload = init;

function init() {

	var img = document.querySelectorAll('.image-side');
	// we have to use for look to iterate through the elements
	for (var i = 0; i < img.length; i++) {
	  
	  imgThumbs[i].addEventListener('click', showImgLightBox);
	}

	// Add onclick function to hide overlay when clicked
	document.querySelector('#img-overlay').onclick = hideImgLightBox;

}

function showImgLightBox(){
	//getAttribute is used to get attribute value of an element, the attribute name is passed in the ()
	var targetImgId = this.getAttribute("data-img-id");
	console.log(targetImgId);
	//show overlay container
	document.querySelector('#img-overlay').style.display ="block";
	//#1 - remove the active class from the current active slide
	//get element that has both the classes image-slide and active and remove the class active from it
	document.querySelector('.img-slide.active').classList.remove('active');
	// console.log(document.querySelector("#"+targetImgId));
	// Add the active class to the slide attached to the "data-img-id" attribute of this thumbnail
	document.querySelector("#"+targetImgId).classList.add('active');
}

function hideImgLightBox(){
	document.querySelector('#img-overlay').style.display ="none";
}


