import { items } from "./constants.js";

const generateGear = () => {
  const gearContainer = document.getElementById("gear-container");
  const angle = 360 / items.length;
  const offsetToParentCenter = parseInt(gearContainer.offsetWidth / 2);
  const offsetToChildCenter = 40;
  const totalOffset = offsetToParentCenter - offsetToChildCenter;
  const isDesktop = window.innerWidth > 800;

  let radius = 250;

  if (window.innerWidth <= 920) {
    radius = 200;
  }

  if (isDesktop) {
    gearContainer.innerHTML = `<h2 class="centered-text">Poznaj nasze kompetencje</h2>`;
  } else {
    gearContainer.innerHTML = ``;
  }

  for (let i = 0; i < items.length; i++) {
    const circle = document.createElement("a");
    circle.href = "#";
    circle.className = "circle-container";

    const { src, title, position } = items[i];

    if (isDesktop) {
      const y = Math.sin(angle * i * (Math.PI / 180)) * radius;
      const x = Math.cos(angle * i * (Math.PI / 180)) * radius;
      circle.style.top = `${y + totalOffset}px`;
      circle.style.left = `${x + totalOffset}px`;
      circle.innerHTML = `<img src=${src} alt=${title}><h2 class="title title-${position}">${title}</h2>`;
    } else {
      circle.innerHTML = `<img src=${src} alt=${title}><h2 class="title">${title}</h2>`;
    }

    gearContainer.appendChild(circle);
  }
};

window.addEventListener("resize", () => {
  generateGear();
});

generateGear();

if (window.innerWidth > 800) {
  anime({
    targets: ".circle-container",
    opacity: [0, 15],
    delay: anime.stagger(75, { from: "first" }),
    easing: "easeInOutQuad",
  });
} else {
  anime({
    targets: ".circle-container",
    translateX: [-200, 0],
    opacity: [0, 15],
    delay: anime.stagger(75, { from: "first" }),
    easing: "easeInOutQuad",
  });
}
