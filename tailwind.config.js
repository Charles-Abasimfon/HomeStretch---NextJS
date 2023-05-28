/** @type {import('tailwindcss').Config} */
module.exports = {
  important: false,
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1320px',
      // => @media (min-width: 1320px) { ... }

      '2xl': '1380px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1480px',
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4.5rem',
        // '2xl': '3rem',
      },
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-img':
          "url('/images/homepage/istockphoto-905863080-2048x2048.png')",
        'video-cover':
          "url('/images/homepage/Screen Shot 2023-03-17 at 11.43.02 AM.png')",
        'success-story-img':
          "url('/images/homepage/Homestretch_Door Graphic.svg')",
      },
      colors: {
        primary: {
          DEFAULT: '#72C059',
          light: '#EbffE8',
        },
        blue: {
          DEFAULT: '#026EA4',
          dark: '#164467',
          light: '#78B2CE',
          100: '#E5F0F6',
        },
        brown: {
          DEFAULT: '#4E4E4E',
          dark: '#333333',
        },
      },
    },
  },
  plugins: [],
};
