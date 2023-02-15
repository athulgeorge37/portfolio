/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "breaddit-1":
                    "url('../../src/assets/images/Breaddit-Image-1.png')",
                "breaddit-2":
                    "url('../../src/assets/images/Breaddit-Image-2.png')",
                "breaddit-3":
                    "url('../../src/assets/images/Breaddit-Image-3.png')",
            },
        },
    },
    plugins: [],
};
