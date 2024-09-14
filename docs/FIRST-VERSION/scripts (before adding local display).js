document.addEventListener('DOMContentLoaded', function () {
    const themeToggleHeader = document.getElementById('themeToggleHeader');
    const themeToggleFooter = document.getElementById('themeToggleFooter');
    const langToggleHeader = document.getElementById('langToggleHeader');
    const langToggleFooter = document.getElementById('langToggleFooter');

    // Sync the toggle states between header and footer
    function syncToggles(toggle1, toggle2) {
        toggle1.addEventListener('change', function () {
            toggle2.checked = toggle1.checked;
        });
        toggle2.addEventListener('change', function () {
            toggle1.checked = toggle2.checked;
        });
    }

    // Apply the theme based on localStorage value
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggleHeader.checked = true;
        themeToggleFooter.checked = true;
    }

    // Sync the theme toggles
    syncToggles(themeToggleHeader, themeToggleFooter);

    // Theme Toggle
    themeToggleHeader.addEventListener('change', function () {
        const isDarkMode = this.checked;
        document.body.classList.toggle('dark-theme', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    themeToggleFooter.addEventListener('change', function () {
        const isDarkMode = this.checked;
        document.body.classList.toggle('dark-theme', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    // Apply the language toggle based on localStorage value
    if (localStorage.getItem('language') === 'ar') {
        langToggleHeader.checked = true;
        langToggleFooter.checked = true;
    }

    // Sync the language toggles
    syncToggles(langToggleHeader, langToggleFooter);

    // Language Toggle
    langToggleHeader.addEventListener('change', function () {
        const newLanguage = this.checked ? 'ar' : 'en';
        localStorage.setItem('language', newLanguage);
        const newPage = newLanguage === 'ar' ? 'index-ar.html' : 'index-en.html';
        window.location.href = newPage;
    });

    langToggleFooter.addEventListener('change', function () {
        const newLanguage = this.checked ? 'ar' : 'en';
        localStorage.setItem('language', newLanguage);
        const newPage = newLanguage === 'ar' ? 'index-ar.html' : 'index-en.html';
        window.location.href = newPage;
    });
});

window.addEventListener('load', function() {
    // Add a delay before hiding the preloader (e.g., 2 seconds = 2000ms)
    setTimeout(function() {
      const preloader = document.getElementById('preloader');
      preloader.style.display = 'none';
    }, 100); // Delay time in milliseconds (2000 = 2 seconds)
  });
  