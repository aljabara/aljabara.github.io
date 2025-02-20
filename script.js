// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Select the theme toggle button
    const themeToggle = document.getElementById("theme-toggle");

    // Check if localStorage has a saved theme preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️"; // Sun icon for light mode
    } else {
        themeToggle.textContent = "🌙"; // Moon icon for dark mode
    }

    // Toggle dark mode on button click
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Save user preference
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            themeToggle.textContent = "☀️"; // Change to sun
        } else {
            localStorage.setItem("dark-mode", "disabled");
            themeToggle.textContent = "🌙"; // Change to moon
        }
    });
});
