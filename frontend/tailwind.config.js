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
          
          "primary": "#7A5832",
                    
          "secondary": "#A34A13",
                    
          "accent": "#CB944B",
                    
          "neutral": "#FDDEB5",
                    
          "base-100": "#ffffff",
                    
          "info": "#6C8468",
                    
          "success": "#6C8468",
                    
          "warning": "#00594C",
                    
          "error": "#762409",
          },
        },
      ],
    },
  plugins: [require('daisyui'),],
}

