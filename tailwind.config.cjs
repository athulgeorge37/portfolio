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
                "path-finding-visualizer-1":
                    "url('../../src/assets/images/PathFindingVisualizer-Image-1.png')",
                "path-finding-visualizer-2":
                    "url('../../src/assets/images/PathFindingVisualizer-Image-2.png')",
                "path-finding-visualizer-3":
                    "url('../../src/assets/images/PathFindingVisualizer-Image-3.png')",
                "minecraft-village-generator-1":
                    "url('../../src/assets/images/Minecraft-Villiage-Generator-Image-1.png')",
                "minecraft-village-generator-2":
                    "url('../../src/assets/images/Minecraft-Villiage-Generator-Image-2.png')",
                "minecraft-village-generator-3":
                    "url('../../src/assets/images/Minecraft-Villiage-Generator-Image-3.png')",
            },
        },
    },
    plugins: [],
};
