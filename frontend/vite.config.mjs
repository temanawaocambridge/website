// Plugins
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    Vue({
      template: { transformAssetUrls }
    }),
    Vuetify(),
    Components(),
    ViteFonts({
      google: {
        families: [{
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900'
        }]
      }
    }),
    VueDevTools(),
    viteStaticCopy({
      targets: [
        {
          src: '404.html', // Source file to copy
          dest: '' // Destination in the dist directory
        }
      ]
    })
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue'
    ]
  },
  server: {
    port: 3000
  },
  optimizeDeps: {
    include: [
      'pexels'
    ]
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})
