// getTheme() can technically be run before window.__theme is set
export function getTheme(): string | undefined {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return window.__theme
}

export function setPreferredTheme(theme: 'light' | 'dark'): void {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.__setPreferredTheme(theme)
}
