/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: '#1c1917',

          secondary: '#DFBDD2',

          accent: '#E1E51B',

          neutral: '#09090b',

          'base-100': '#E2E2E2',

          info: '#0A60FF',

          success: '#4ade80',

          warning: '#EA8A16',

          error: '#C2273B',

          '--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '9999px', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-text-case': 'titlecase', // set default text transform for buttons
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
  theme: {
    container: {
      center: true,
    },
    screens: {
      xxxs: '280px',
      // => @media (min-width: 280px) { ... }

      xxs: '360px',
      // => @media (min-width: 360px) { ... }

      xs: '425px',
      // => @media (min-width: 425px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      mlg: '992px',
      // => @media (min-width: 992px) { ... }

      lg: '1080px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    letterSpacing: {
      widest: '0.05em',
    },
    extend: {
      fontFamily: {
        rvi: ['Irregulars-Regular'],
        secular: ['Secular One'],
        inter: ['Inter'],
      },
      colors: {
        primary: '#542774',
        secondary: '#ef3b24',
        white: '#FAFAFA',
        black: '#171717',
        grey: '#E2E2E2',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'fade-out': 'fade-out 0.5s ease-in-out',
      },
    },
  },
  plugins: [require('daisyui')],
};
