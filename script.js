const toggleButton = document.getElementById('toggleDarkMode');
const body = document.body;

console.log('Script is running!');

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        console.log('Button clicked!');
        body.classList.toggle('dark-mode');
    });
}

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

console.log('System prefers dark mode:', prefersDarkMode);

if (prefersDarkMode) {
    console.log('Dark mode preferred by the system.');
    body.classList.add('dark-mode');
}
