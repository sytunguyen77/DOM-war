// document.querySelector(".search-btn").addEventListener("click", function () {
//   this.parentElement.classList.toggle("open");
//   this.previousElementSibling.focus();
// });

const searchButton = document.querySelector(".search-btn");
searchButton.addEventListener("click", () => {
  const parent = searchButton.parentElement;
  parent.classList.toggle("open");
  parent.querySelector("input").focus();
});
