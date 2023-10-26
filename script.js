// This JavaScript file will add a hover effect to the safari options links.

// JavaScript to open WhatsApp link when the button is clicked
document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("book-button")) {
      const whatsappLink = e.target.getAttribute("data-whatsapp");
      if (whatsappLink) {
          window.open(whatsappLink, "_blank");
      }
  }
});


/*Cards layout==========================================================*/
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.classList.add("active");
  });

  card.addEventListener("mouseout", () => {
    card.classList.remove("active");
  });
});

/*Gallery==========================================================*/
