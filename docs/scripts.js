document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('language-select');
    const themeSelect = document.getElementById('theme-select');
    const currentLang = document.getElementById('current-lang');
    const currentTheme = document.getElementById('current-theme');
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');


    // Set default language to English
    const defaultLanguage = 'en';
    const savedLanguage = localStorage.getItem('language') || defaultLanguage;
    languageSelect.value = savedLanguage;
    updateCurrentLang(savedLanguage);

    // Load saved theme and language
    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    document.body.classList.add(savedTheme);
    themeSelect.value = savedTheme === 'dark-theme' ? 'dark' : 'light';
    updateCurrentTheme(savedTheme);

    // Update current values
    function updateCurrentLang(lang) {
        const languages = {
            en: 'English',
            ar: 'Arabic',
            es: 'Spanish'
        };
        currentLang.textContent = languages[lang] || 'Unknown';
    }
    
    function updateCurrentTheme(theme) {
        currentTheme.textContent = theme === 'dark-theme' ? 'Dark' : 'Light';
    }

    // Language changer logic
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = this.value;
        localStorage.setItem('language', selectedLanguage);
        updateCurrentLang(selectedLanguage);
        if (selectedLanguage === 'en') {
            window.location.href = 'index.html';
        } else {
            window.location.href = `index-${selectedLanguage}.html`;
        }
    });

    // Theme toggle logic
    themeSelect.addEventListener('change', function() {
        const selectedTheme = this.value;
        if (selectedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark-theme');
            updateCurrentTheme('dark-theme');
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light-theme');
            updateCurrentTheme('light-theme');
        }
    });
   // Toggle hamburger and dropdown visibility
   menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    navList.classList.toggle('active');
});



});




