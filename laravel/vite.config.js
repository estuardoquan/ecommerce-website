import { defineConfig } from 'vite';
import https from 'vite-plugin-https';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(async () => ({
    server: {
        host: true,
        port: 5173,
        //cors: {
        //    origin: ['https://shop.local', 'https://www.shop.local'],
        //},
        hmr: {
            host: process.env.VITECONFIG_HMR_HOST,
            clientPort: process.env.VITECONFIG_HMR_CLIENTPORT,
        },
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
            path: process.env.VITECONFIG_HTTPS_PATH,
        }),
    ],
}));
