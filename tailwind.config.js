/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                gold: '#C6A43F',
                darkgold: '#A6862E',
                chocolate: '#4A2C2A',
                lightchocolate: '#6B4238',
                cream: '#FDF8F0',
                offwhite: '#FAF7F2',
                sage: '#8B9A6E',
                forest: '#2D4A22',
            },
            fontFamily: {
                serif: ['Playfair Display', 'Georgia', 'serif'],
                script: ['Cormorant Garamond', 'serif'],
                body: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-up': 'fadeUp 0.8s ease-out forwards',
                'fade-in': 'fadeIn 1s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
        },
    },
    plugins: [],
}