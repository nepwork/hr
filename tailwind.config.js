'use strict';

const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
    mode: 'jit',
    purge: {
        content: [
            './apps/**/*.{html,svelte,tsx,ts,jsx,js,pcss,scss,css}',
            './libs/**/*.{html,svelte,tsx,ts,jsx,js,pcss,scss,css}',
        ],
        // PurgeCSS options
        // Reference: https://purgecss.com/
        //enable: production, // disable purge in dev
        options: {
            rejected: true,
            printRejected: true,
            safelist: ['html', 'body', 'dark'],
            safelistPatterns: [/svelte-/],
        },
    },
    /**
     * Enable dark mode
     */
    darkMode: 'class',
    theme: {
        colors: {
            ...colors,
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/forms"),
        plugin(function ({ addComponents, theme }) {
            const screens = theme("screens", {});
            addComponents([
                {
                    ".container": { width: "100%" },
                },
                {
                    [`@media (min-width: ${screens.sm})`]: {
                        ".container": {
                            "max-width": "640px",
                        },
                    },
                },
                {
                    [`@media (min-width: ${screens.md})`]: {
                        ".container": {
                            "max-width": "768px",
                        },
                    },
                },
                {
                    [`@media (min-width: ${screens.lg})`]: {
                        ".container": {
                            "max-width": "1024px",
                        },
                    },
                },
                {
                    [`@media (min-width: ${screens.xl})`]: {
                        ".container": {
                            "max-width": "1280px",
                        },
                    },
                },
                {
                    [`@media (min-width: ${screens["2xl"]})`]: {
                        ".container": {
                            "max-width": "1280px",
                        },
                    },
                },
            ]);
        }),
    ],
};