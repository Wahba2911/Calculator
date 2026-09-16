var allKeys = document.querySelectorAll(".key");
var display = document.querySelector("#display");
var deleteButton = document.querySelector("#delete");

allKeys.forEach((key) => {
  key.addEventListener("click", (e) => {
    display.value += e.target.innerHTML;
  });
});

deleteButton.addEventListener("click", () => {
  display.value = "";
});
