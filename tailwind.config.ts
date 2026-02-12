import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary brand color - CHANGE THESE HEX VALUES to update the entire site
                primary: {
                    DEFAULT: '#0066CC',  // Vibrant Blue
                    hover: '#0052A3',     // Darker blue for hover states
                    light: '#3B82F6',     // Light blue
                    dark: '#1E40AF',      // Dark blue
                },
            },
        },
    },
    plugins: [],
};

export default config;
