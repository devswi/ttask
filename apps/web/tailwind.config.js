const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.{ts,tsx}'],
    darkMode: 'class', // false or 'media'
    theme: {
        colors: {
            transparent: 'transparent',
            ['low']: '#4ade80',
            ['medium']: '#4f46e5',
            ['high']: '#7e22ce',
            ['urgent']: '#ef4444',
            ...colors,
        },
        extend: {},
    },
    plugins: [],
};
