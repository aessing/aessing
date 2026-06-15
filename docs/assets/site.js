const hero = document.querySelector(".hero");
document.documentElement.classList.add("js-ready");

if (hero) {
  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    hero.style.setProperty("--mx", `${x}%`);
    hero.style.setProperty("--my", `${y}%`);
  });
}
