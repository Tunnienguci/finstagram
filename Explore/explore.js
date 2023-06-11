let btn__redirect_left = document.querySelector("#scrollLeft");
let btn__redirect_right = document.querySelector("#scrollRight");
let stories = document.querySelector(".stories");


btn__redirect_left.addEventListener("click", function () {
  if (stories.scrollLeft < 500) {
    btn__redirect_left.style.display = "none";
    btn__redirect_right.style.display = "block";
  }
  stories.scrollLeft -= 500;
});

btn__redirect_right.addEventListener("click", function () {
  if (stories.scrollLeft > -1) {
    btn__redirect_right.style.display = "none";
    btn__redirect_left.style.display = "block";
  }
  stories.scrollLeft += 500;
});
