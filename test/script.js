/* --- IntersectionObserver 遅延あり --- */
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fadein, .slidein-l");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const delay = parseInt(target.dataset.delay) || 0;
          setTimeout(() => {
            target.classList.add("show");
          }, delay);
          observer.unobserve(target);
        }
      });
    },
    { threshold: 0 }
  );

  elements.forEach((el) => observer.observe(el));
});
/* --- /IntersectionObserver 遅延あり --- */
