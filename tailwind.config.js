module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1280px',
    },
    colors: {
      transparent: 'transparent',
      primary: '#d54100',
      'primary-dark': '#772400',
      'primary-light': '#887676',
      secondary: '#f8b52e',
      'secondary-dark': '#f0ad25',
      white: '#fff',
      black: '#000',
      milk: '#fafafa',
      'gray-light': '#f0f0f0',
      'gray-100': '#CED4DA',
      'gray-200': '#00000029',
      'gray-250': '#DADFE3',
      'gray-300': '#818A91',
      'gray-400': '#6C757D',
      'gray-500': '#212529',
    },
    fontFamily: {
      sans: [
        '"Noto Sans TC"',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
    },
    fontSize: {
      sm: '14px',
      base: '16px',
      lg: '20px',
      xl: '24px',
      '2xl': '28px',
      '3xl': '32px',
      '4xl': '36px',
      '5xl': '40px',
      '6xl': '48px',
    },
    spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem', // 2px
      1: '0.25rem', // 4px
      1.5: '0.375rem', // 6px
      2: '0.5rem', // 8px
      2.5: '0.625rem', // 10px
      3: '0.75rem', // 12px
      3.5: '0.875rem', // 14px
      3.75: '0.9375rem', // 15px
      4: '1rem', // 16px
      5: '1.25rem', // 20px
      5.5: '1.375rem', // 22px
      6: '1.5rem', // 24px
      7: '1.75rem', // 28px
      7.5: '1.875rem', // 30px
      8: '2rem', // 32px
      9: '2.25rem', // 36px
      10: '2.5rem', // 40px
      11: '2.75rem', // 44px
      12: '3rem', // 48px
      13: '3.375rem', // 54px
      14: '3.5rem', // 56px
      15: '3.75rem', // 60px
      16: '4rem', // 64px
      20: '5rem', // 80px
      20.5: '5.125rem', // 82px
      22.5: '5.625rem', // 90px
      24: '6rem', // 96px
      25: '6.25rem', // 100px
      26: '6.5rem', // 104px
      27: '6.75rem', // 108px
      28: '7rem', // 112px
      30: '7.5rem', // 120px
      31.25: '7.8125rem', // 125px
      32: '8rem', // 128px
      33: '8.25rem', // 132px
      36: '9rem', // 144px
      40: '10rem', // 160px
    },
    container: {
      center: true,
      screens: {
        sm: '540px',
        md: '690px',
        lg: '1110px',
      },
      padding: {
        DEFAULT: '15px',
        md: 0,
      },
    },
    boxShadow: {
      none: '0 0 #0000',
      base: '0px 3px 6px #00000029',
    },
    extend: {},
  },
  plugins: [],
};
