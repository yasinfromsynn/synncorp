// 1. Put your WhatsApp number here: country code + number, no + or spaces.
// Example for 01712-345678 is 8801712345678
var WHATSAPP_NUMBER = "8801712-759075";

// 2. Product filter buttons
var filterButtons = document.querySelectorAll(".filters button");
var cards = document.querySelectorAll(".card");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    filterButtons.forEach(function (b) { b.classList.remove("active"); });
    button.classList.add("active");

    var filter = button.dataset.filter;
    cards.forEach(function (card) {
      var show = filter === "all" || card.dataset.category === filter;
      card.style.display = show ? "flex" : "none";
    });
  });
});

// 3. "Order on WhatsApp" buttons
document.querySelectorAll(".order").forEach(function (button) {
  button.addEventListener("click", function () {
    var message = "Hello, I would like to order: " + button.dataset.name;
    var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
  });
});

// 4. Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();
