/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
        "./src/screens/**/*.{js,jsx,ts,tsx}",
        "./src/features/**/*.{js,jsx,ts,tsx}",
        "./src/shared/**/*.{js,jsx,ts,tsx}",
        "./app/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins-Regular"],
                "poppins-semibold": ["Poppins-SemiBold"],
                "poppins-bold": ["Poppins-Bold"],
            },
            borderRadius: {
                "3xl": "24px",
                "4xl": "32px",
            },
            colors: {
                primary: {
                    DEFAULT: "#063B3C",
                    50: "#EEF7F6",
                    100: "#D5ECE9",
                    200: "#ACD8D3",
                    300: "#7EBFB8",
                    400: "#4D9F96",
                    500: "#2B7C74",
                    600: "#145E58",
                    700: "#0B4C49",
                    800: "#063B3C",
                    900: "#042B2D",
                },

                secondary: {
                    DEFAULT: "#8BCF74",
                    50: "#F4FBEA",
                    100: "#E6F6D5",
                    200: "#CDEAAF",
                    300: "#B3DD89",
                    400: "#9BD46D",
                    500: "#8BCF74",
                    600: "#73B85B",
                    700: "#5D9848",
                    800: "#49793A",
                    900: "#385D2D",
                },

                background: "#F8FAF8",
                surface: "#FFFFFF",

                text: "#1F2937",
                secondary: "#6B7280",
                link: "#8bcf74",
                placeholder: "#9CA3AF",

                border: "#E5E7EB",

                success: "#22C55E",
                warning: "#F59E0B",
                error: "#EF4444",
                info: "#3B82F6",

                income: "#16A34A",
                expense: "#DC2626",
                transfer: "#2563EB",
            },
        },
    },
    plugins: [],
}
