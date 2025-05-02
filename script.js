window.addEventListener("scroll", function () {
    const header = document.getElementById("main-header");
    const body = document.body;
if (window.scrollY > 50) {
    header.classList.add("scrolled");
    body.classList.add("scrolled");
} else {
    header.classList.remove("scrolled");
    body.classList.remove("scrolled");
}
});

document.querySelectorAll('.skill-card').forEach((card, cardIndex) => {
  const items = card.querySelectorAll('.skill-item');
  items.forEach((item, itemIndex) => {
    item.style.animationDelay = `${0.1 * (itemIndex + cardIndex + 1)}s`;
  });
});