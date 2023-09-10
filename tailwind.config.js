/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 }
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' }
                },
                blink: {
                    '0%': { opacity: 0.2 },
                    '20%': { opacity: 1 },
                    '100% ': { opacity: 0.2 }
                }
            },
            animation: {
                fadeIn: 'fadeIn .3s ease-in-out',
                carousel: 'marquee 30s linear infinite',
                blink: 'blink 1.4s both infinite'
            },
            colors: {
                'primetouch': {
                    DEFAULT: '#8B4513',
                    'light': '#DD8560',
                    '50': '#DB4444',
                },
            },
        },
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [require("tw-elements/dist/plugin.cjs")],
}
