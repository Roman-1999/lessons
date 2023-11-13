document.addEventListener("DOMContentLoaded", function () {
  const itemCards = document.querySelectorAll(".item-cards");
  function revealItems() {
    itemCards.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("visible");
      }, index * 200);
    });
  }
  revealItems();
});