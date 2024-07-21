const shareOption = document.querySelector(".card__share-option");
const shareButton = document.querySelector(".card__share-button");

shareButton.addEventListener("click", function () {
  this.classList.toggle("active");
  shareOption.classList.toggle("active");
});
