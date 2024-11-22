import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';

export default defineConfig({
  publicDir: 'public',
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  plugins: [
    eslint({
      cache: false,
      fix: true,
    }),
    ViteSvgSpriteWrapper({
      icons: 'src/assets/icons/*.svg',
      outputDir: 'public/images',
      sprite: {
        dest: 'public/images',
      },
    }),
  ],
});
