/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [
 
    "./src/**/*.{js,jsx,ts,tsx}",
 
  ],
 
  theme: {
 
    extend: {
      colors: {
        primary:{
          50:  "hsl(var(--color-primary-50))",
          100:  "hsl(var(--color-primary-100))",
          200:  "hsl(var(--color-primary-200))",
          300:  "hsl(var(--color-primary-300))",
          400:  "hsl(var(--color-primary-400))",
          500:  "hsl(var(--color-primary-500))",
      
        },
        secondary:{
         
          300:  "hsl(var(--color-secondary-300))",
          400:  "hsl(var(--color-secondary-400))",
          500:  "hsl(var(--color-secondary-500))",
          600:  "hsl(var(--color-secondary-600))",
          700:  "hsl(var(--color-secondary-700))",
          800:  "hsl(var(--color-secondary-800))",
      
        }
      }
    },
 
  },
 
  plugins: [],
 
 }