// =========================
// PORTFOLIO JAVASCRIPT
// =========================

// Reveal email when clicked

function showEmail() {
    document.getElementById("email-text").innerHTML =
        "sandeepyadav200300@gmail.com";
}

// =========================
// SCROLL ANIMATIONS
// =========================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

cards.forEach((card) => {
    observer.observe(card);
});

// =========================
// ACTIVE NAVIGATION HIGHLIGHT
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =========================
// CONSOLE MESSAGE
// =========================

console.log("Sandeep Yadav Portfolio Loaded Successfully 🚀");
