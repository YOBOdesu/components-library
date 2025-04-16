/* ---------- アニメーション ---------- */
/* IntersectionObserver */
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".fadein, .expand, .slidein-b, .slidein-l, .slidein-t, .slidein-r"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // クラスを追加
          observer.unobserve(entry.target); // 監視を解除（1回だけ実行）
        }
      });
    },
    { threshold: 0 }
  );

  elements.forEach((el) => observer.observe(el));
});
/* IntersectionObserver END */
