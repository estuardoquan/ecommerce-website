import { defineConfig } from 'vite';
import https from 'vite-plugin-https';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(async () => ({
    server: {
        host: true,
        port: 5173,
        hmr: {
            host: process.env.VCONF_HMR_HOST,
            clientPort: process.env.VCONF_HMR_CLIENTPORT,
        },
        // No need to set up CORS if APP_URL is set in .env
        // cors: {
        //     origin: [],
        // },
    },
    plugins: [
        laravel({
            input: ['resources/js/app.ts'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        tailwindcss(),
        https({
            path: process.env.VCONF_HTTPS_PATH,
        }),
    ],
}));
