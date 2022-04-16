window.onload = init;

function init() {
	document.getElementById("image-1").onclick = showImgLightBox; //function to open lightbox on click
	document.getElementById("image-overlay").onclick = hideImgLightBox; //function to close on click
}

function showImgLightBox() { //function to reveal the lightbox overlay
	document.getElementById("image-overlay").style.display = "block";
}

function hideImgLightBox() { //to hide
	document.getElementById("image-overlay").style.display = "none";
}

$('#profile').submit(function(e) { //form validation
	e.preventDefault();
	var form = this;
	$(".buffer-container").fadeIn(1000, function() {
		showProfileValues(form);
		$('.buffer-container').delay(500).fadeOut(500);
		$("#profile-info").addClass('reveal');
	});
});

function showProfileValues(form) {
	var profileValues = $(profile).serializeArray();

	$.each(profileValues, function(index, field) {

		$("#profile-info").find("#" + field.name + "_result").text(field.value);
	});
}