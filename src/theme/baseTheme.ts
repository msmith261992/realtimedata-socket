import { wpx, hpx } from './resizeDimensions';

/* Base theme file to put in universally stylings & colours used across the app */
export const baseTheme = {
  sizing: {
    'base-width': wpx(4),
    'base-height': hpx(4),
  },
  colors: {
    background: '#f6f8f7',
    grey: '#9FADC4',
    white: '#fff',
    black: '#000',
    primary: '#7af992',
    secondary: '#527ff4',
    purple: '#e6e2f9',
    error: '#E24343',
  },
  /* IF TIME - Add font stylings (sizes & font-family) */
};
