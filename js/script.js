'use strict';
document.documentElement.classList.replace('no-js', 'js');
const menuButton = document.querySelector('[data-menu-toggle]');
const navigation = document.getElementById('primary-navigation');
if (menuButton && navigation) {
  const desktop = window.matchMedia('(min-width: 1100px)');
  const setMenu = (open, restoreFocus = false) => {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    navigation.classList.toggle('is-open', open);
    if (restoreFocus) menuButton.focus();
  };
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  navigation.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    setMenu(false);
    const section = document.getElementById(link.hash.slice(1));
    if (section) section.focus({ preventScroll: true });
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  for (const type of ['click', 'focusin']) document.addEventListener(type, (event) => {
    if (!navigation.contains(event.target) && !menuButton.contains(event.target)) setMenu(false);
  });
  desktop.addEventListener('change', () => setMenu(false));
}

// The early head script restores the preference before the first paint.
const themeButton = document.querySelector('[data-theme-toggle]');
if (themeButton) {
  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    const label = theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
    themeButton.setAttribute('aria-label', label);
    themeButton.title = label;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#080d1b' : '#f3f6fb';
  };
  applyTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  themeButton.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
    try { localStorage.setItem('kanturobot-theme', theme); } catch (_) { /* The control still works when storage is unavailable. */ }
  });
}
