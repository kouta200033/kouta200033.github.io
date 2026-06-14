// テーマ切り替え
(function () {
  const root = document.documentElement;
  const btn = document.getElementById("themeBtn");

  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    root.setAttribute("data-theme", "dark");
    btn.textContent = "☀️";
  }

  btn.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";

    if (isDark) {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      btn.textContent = "🌙";
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      btn.textContent = "☀️";
    }
  });
})();

// スクロールアニメーション
(function () {
  const reveals = document.querySelectorAll(".reveal");

  function reveal() {
    const trigger = window.innerHeight * 0.85;

    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) el.classList.add("visible");
    });
  }

  window.addEventListener("scroll", reveal);
  window.addEventListener("load", reveal);
})();

// ヘッダー縮小
window.addEventListener("scroll", () => {
  const header = document.querySelector(".glass-header");
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ナビのアクティブ表示
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


