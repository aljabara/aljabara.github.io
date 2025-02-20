// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");

// Check if localStorage has a saved theme preference
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️"; // Sun icon for light mode
} else {
    themeToggle.textContent = "🌙"; // Moon icon for dark mode
}

// Toggle Dark Mode on Button Click
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("dark-mode", "disabled");
        themeToggle.textContent = "🌙";
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

