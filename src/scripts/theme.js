export function setDarkMode(themeName) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }
}

export function toggleDarkMode() {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setDarkMode('theme-light');
    } else {
      setDarkMode('theme-dark');
    }
  }
}

export function isDarkMode() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme') === 'theme-dark';
  }
  return false;
}