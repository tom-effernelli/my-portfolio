/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: {
        min: "1200px",
      },
      md: {
        min: "800px",
        max: "1200px",
      },
      sm: {
        max: "800px",
      },
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'space-grotesk': ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
        'dm-serif-text': ['"DM Serif Text"', 'serif'],
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
