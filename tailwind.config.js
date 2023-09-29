/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        'node_modules/preline/dist/*.js'

    ],
    theme: {
        extend: {
            colors: {
                'primary': '#FFF3E3',
                'onPrimary': '#B88E2F',
                'onPrimaryHover': '#957429',
                'brandGray': '#333333',
                'brandGrayLight': '#666666'
            },
        },
    },
    plugins: [
        require('preline/plugin'),
        require('@tailwindcss/forms')
    ],
}