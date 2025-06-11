function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const themeToggle = document.getElementById('theme-toggle');
const themeToggleHamburger = document.getElementById('theme-toggle-hamburger');
const body = document.body;

function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
}

function toggleTheme() {
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'light');
        applyTheme('light');
    } else {
        localStorage.setItem('theme', 'dark');
        applyTheme('dark');
    }
}

themeToggle.addEventListener('click', toggleTheme);
themeToggleHamburger.addEventListener('click', toggleTheme);

// Apply saved theme on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
}