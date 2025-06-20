/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                brown: {
                    500: '#A52A2A', // Коричневый цвет
                },
            },
        },
    },
    // eslint-disable-next-line no-undef
    plugins: [require("daisyui")],
};
