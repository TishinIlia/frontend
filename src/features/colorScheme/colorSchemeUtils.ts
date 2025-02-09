const LS_COLOR_SCHEME_KEY = 'devices:scheme';

export function applyScheme(scheme: 'dark' | 'light', persist = false): void {
  (document.querySelector('meta[name="theme-color"]') as HTMLElement).setAttribute(
    'content',
    scheme === 'dark' ? '#262A2F' : '#fff',
  );
  const classes = document.documentElement.classList;

  if (!classes.contains(scheme)) {
    if (classes.contains(scheme === 'dark' ? 'light' : 'dark')) {
      classes.replace(scheme === 'dark' ? 'light' : 'dark', scheme);
    } else {
      classes.add(scheme);
    }
  }

  persist && localStorage.setItem(LS_COLOR_SCHEME_KEY, scheme);
}

export function getSystemScheme(): 'dark' | 'light' {
  return window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
}

export function getSavedScheme(): 'dark' | 'light' | null {
  return localStorage.getItem(LS_COLOR_SCHEME_KEY) as 'dark' | 'light' | null;
}

export function removeSavedScheme(): void {
  localStorage.removeItem(LS_COLOR_SCHEME_KEY);
}
