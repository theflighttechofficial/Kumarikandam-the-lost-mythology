import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'lemuria_theme';
const THEME_COLOR: Record<Theme, string> = { light: '#F2E8D2', dark: '#1E1914' };

function currentTheme(): Theme {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  // Switch every colour at once: hover transitions on buttons and cards would otherwise
  // animate from the old theme and briefly leave text unreadable.
  root.classList.add('theme-switching');
  root.setAttribute('data-theme', theme);
  void root.offsetHeight; // commit styles while transitions are off
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove('theme-switching')));
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme]);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage unavailable (private mode): the choice lasts for this page view only.
  }
}

/** Shared theme state. Every caller stays in sync, including other open tabs. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  useEffect(() => {
    const sync = () => setTheme(currentTheme());
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && (e.newValue === 'light' || e.newValue === 'dark')) {
        document.documentElement.setAttribute('data-theme', e.newValue);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => {
      observer.disconnect();
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  const toggle = useCallback(() => applyTheme(currentTheme() === 'dark' ? 'light' : 'dark'), []);
  return { theme, toggle };
}
