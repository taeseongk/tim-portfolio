/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'NTR': ['NTR', 'sans-serif'],
            },
            colors: {
                background: '#0a192f',
                button: '#14b8a6',
                primary: '#ccd6f6',
                secondary: '#8892b0',
                tertiary: '#a2a6a8',
                writing: '#ffffff'
            }
        }
    },
}
