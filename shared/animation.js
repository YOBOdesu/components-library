/* ---------- アニメーション ---------- */
/* --- IntersectionObserver --- */
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    // アニメーションはここに追加
    ".fadein, .expand, .slidein-b, .slidein-l, .slidein-t, .slidein-r"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // 監視を解除（1回だけ実行）
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
});
/* --- /IntersectionObserver --- */

/* --- IntersectionObserver 遅延あり --- */
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    // アニメーションはここに追加
    ".fadein, .expand, .slidein-b, .slidein-l, .slidein-t, .slidein-r"
  );

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
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
});
/* --- /IntersectionObserver 遅延あり --- */
