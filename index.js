/** @format */

let endShow = document.getElementById("endShow");
let startShow = document.getElementById("startShow");
let main = document.querySelector(".formMain");
let preview = document.querySelector(".preview__profile");
let statusView = document.querySelector(".status");

endShow.addEventListener("click", function () {
	preview.style.animation = "hidePreview 0.5s ease-in-out";
	main.style.animation = "formMain 0.5s ease-in-out";
	statusView.style.animation = "closeStatus 0.5s ease-in-out";
	setTimeout(function () {
		preview.style.display = "none";
		preview.style.opacity = "0";
	}, 500);
});
startShow.addEventListener("click", function () {
	statusView.style.animation = "openStatus 0.5s ease-in-out";
	preview.style.animation = "showPreview 0.5s ease-in-out";
	main.style.animation = "openMain 0.5s ease-in-out";
	preview.style.opacity = "1";
	preview.style.zIndex = "1";
	preview.style.transform = "translateX(0%)";
	setTimeout(function () {
		preview.style.display = "block";
	}, 500);
});
