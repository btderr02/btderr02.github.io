// tailwind.config.js
module.exports = {
  content: [
    './**/*.html',
    './**/*.js',
    // etc. (all your files that might use Tailwind classes)
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#722838',
        tertiary: '#404234',
      },
      fontFamily: {
        // A custom name (e.g., "geist")
        geist: ['"Geist Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
