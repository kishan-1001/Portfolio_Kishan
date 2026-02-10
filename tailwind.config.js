/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
            colors: {
                // I might add custom colors here if I extract them from the image.
                // It looks like a very minimal color palette: Black, White, maybe a slight gray background.
            }
        },
    },
    plugins: [],
}
