import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],

    compilerOptions: {
        baseUrl: '.',
        paths: {
            '@/*': ['./src/*'],
        },
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@page': '/src/pages',
            '@components': 'src/components',
        },
    },
    server: {
        port: 3000,
    },
});
