/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#3ce047",
        
"secondary": "#235793",
        
"accent": "#c6ce54",
        
"neutral": "#2a213b",
        
"base-100": "#eae0f0",
        
"info": "#71b9f4",
        
"success": "#75ebba",
        
"warning": "#a75f06",
        
"error": "#ec3b27",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

