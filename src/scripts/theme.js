export function setDarkMode(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

export function toggleDarkMode() {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setDarkMode('theme-light');
  } else {
    setDarkMode('theme-dark');
  }
}

export function isDarkMode() {
  return localStorage.getItem('theme') === 'theme-dark';
}