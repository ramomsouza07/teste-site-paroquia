/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'branco': '#FDEFDE',
        'branco-amarelado': '#F4E4CF',
        'marrom-claro': '#A48267',
        'marrom-escuro': '#331905',
        'mostarda': '#D0A933',
        'cinza': '#7C7B7B',
        'cinza-escuro': '#545454',
      },
      fontFamily: {
        // Define a Questrial como a fonte sem serifa padrão (textos)
        sans: ['Questrial', 'sans-serif'], 
        // Cria a variável para os títulos
        titulo: ['Cal Sans', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}