let endShow = document.getElementById("endShow");
let startShow = document.querySelector("#account__users");
let preview = document.querySelector(".preview__profile");
let detail = document.querySelector(".btn-view");

endShow.addEventListener("click", function () {
    preview.style.animation = "hidePreview 0.5s ease-in-out";
    preview.style.opacity = "0";
    preview.style.display = "none";
  });
  
  startShow.addEventListener("click", function () {
    preview.style.animation = "showPreview 0.5s ease-in-out";
    preview.style.opacity = "1";
    preview.style.zIndex = "1";
    preview.style.transform = "translateX(0%)";
    preview.style.display = "block";
  });
  
  detail.addEventListener("click", function () {
    //Redirect to detail page
    window.location.href = "/Detail/detail.html";
  });