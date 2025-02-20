// Select the theme toggle button
const themeToggle = document.getElementById("theme-toggle");

// Check if dark mode is already enabled in localStorage
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️"; // Show sun icon when in dark mode
}

// Toggle dark mode on button click
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Save user preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
        themeToggle.textContent = "☀️"; // Change icon to sun
    } else {
        localStorage.setItem("dark-mode", "disabled");
        themeToggle.textContent = "🌙"; // Change icon to moon
    }
});
