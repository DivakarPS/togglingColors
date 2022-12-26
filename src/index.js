var button = document.getElementById("toggle");
var back = document.body;
var h1 = document.querySelector("h1");
var count = 0;

button.addEventListener("click", function () {
  count++;
  if (count & 1) {
    back.style.backgroundColor = "black";
    h1.style.color = "white";
  } else {
    back.style.backgroundColor = "white";
    h1.style.color = "black";
  }
});
