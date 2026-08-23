/* =============================================
   NEW'S GRILL KEBAB CHEZ SULO — Scripts
   ============================================= */

document.addEventListener("DOMContentLoaded", function() {

  /* ── NAV : scroll affix ── */
  var navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function() {
    if (window.scrollY > 80) {
      navbar.classList.remove("affix-top");
      navbar.classList.add("affix");
    } else {
      navbar.classList.add("affix-top");
      navbar.classList.remove("affix");
    }
  });

  /* ── NAV : burger mobile ── */
  var burger = document.getElementById("nav-burger");
  var navLinks = document.getElementById("nav-links");
  if (burger && navLinks) {
    burger.addEventListener("click", function() {
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach(function(link) {
      link.addEventListener("click", function() {
        navLinks.classList.remove("open");
      });
    });
  }

  /* ── SMOOTH SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener("click", function(e) {
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        var offset = 70;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    });
  });

  /* ── SCROLL TOP BUTTON ── */
  var scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    window.addEventListener("scroll", function() {
      if (window.scrollY > 400) {
        scrollBtn.classList.add("visible");
      } else {
        scrollBtn.classList.remove("visible");
      }
    });
    scrollBtn.addEventListener("click", function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ── ANIMATE ON SCROLL (fade-up léger) ── */
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".menu-group, .review-card, .bubble-items .item, .info-item").forEach(function(el) {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.45s ease, transform 0.45s ease";
    observer.observe(el);
  });

});

/* Le filtrage des onglets de la carte est géré par i18n.js
   (les onglets et fiches sont générés dynamiquement en FR/DE). */

/* ── FORMULAIRE CONTACT ── */
function handleSubmit(e) {
  e.preventDefault();
  var success = document.getElementById("form-success");
  if (success) {
    success.style.display = "block";
    e.target.reset();
    setTimeout(function() { success.style.display = "none"; }, 5000);
  }
}
