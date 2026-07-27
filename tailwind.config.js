/** Конфиг для сборки статического css/tailwind.css.
 *  Значения должны совпадать с токенами в css/styles.css.
 *  Пересборка: npm run css   (см. README) */
module.exports = {
  content: ['./index.html', './js/**/*.js'],
  theme: {
    extend: {
      colors: {
        cream:  { DEFAULT: '#FDFAF6', 2: '#F5EDE4', 3: '#EDE0D2' },
        ink:    { DEFAULT: '#1E2A1C', soft: '#4A5A46' },
        garden: { DEFAULT: '#2E5E3A', dk: '#1D3F26', lt: '#8FB89A' },
        peony:  { DEFAULT: '#B92F58', lt: '#E58BA5', pale: '#F7DFE6' },
        gold:   '#B8912F'
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['Manrope', 'system-ui', 'sans-serif'],
        // каллиграфия: Great Vibes, кириллица подтверждена (U+0400-045F)
        hand:    ['"Great Vibes"', 'cursive']
      },
      maxWidth: { content: '76rem' }
    }
  },
  plugins: []
}
