export type Theme = 'dark' | 'light'

export type ThemeConfig<T extends Theme> = {
  [K in T]:Record<string, any>
}

export const THEME:ThemeConfig<Theme> = {
  dark: {
    '--bg-color': '#121212',
    '--bg-color-1': '#232323',
    '--bg-color-2': ' #343434',
    '--bg-color-3': '#252527',
    '--text-color': '#fff',
    '--text-color-1': ' #f1f1f1',
    '--text-color-2': '#ccc',
    '--text-color-3': '#858585',
    '--border-color-1': 'rgba(0,0,0,.1)',
    '--main': '#0256FF',
  },
  light: {
    '--bg-color': '#fff',
    '--bg-color-1': '#F2F7FC',
    '--bg-color-2': ' #D9D9D9',
    '--bg-color-3': '#0256FF',
    '--text-color': '#000',
    '--text-color-1': '#333',
    '--text-color-2': ' #666',
    '--text-color-3': '#fff',
    '--border-color-1': 'rgba(0,0,0,.1)',
    '--main': '#0256FF',
  }
}