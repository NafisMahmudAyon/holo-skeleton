const config = {
    content: [
        "./app/src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                'wave': 'wave 3s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite',
            },
            keyframes: {
                wave: {
                    '0%, 100%': { transform: 'translateX(-100%)' },
                    '50%': { transform: 'translateX(100%)' },
                },
            },
        },
    },
    plugins: [],
};
export default config;
