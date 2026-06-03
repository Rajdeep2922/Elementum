import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // Target modern browsers for smaller bundles
    target: 'es2018',

    // Raise the chunk-size warning threshold (300 kB default is fine for prod)
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Stable file-name hashing for long-term caching
        entryFileNames:  'assets/[name]-[hash].js',
        chunkFileNames:  'assets/[name]-[hash].js',
        assetFileNames:  'assets/[name]-[hash][extname]',

        // Code-split vendor chunks for better caching
        manualChunks(id) {
          if (id.includes('framer-motion')) return 'framer-motion';
          if (id.includes('react-dom'))     return 'react-dom';
          if (id.includes('react'))         return 'react';
        },
      },
    },

    // Minify with esbuild (default + fast)
    minify: 'esbuild',

    // Inline assets smaller than 4 kB as data-URIs
    assetsInlineLimit: 4096,

    // Generate source maps only in CI/staging
    sourcemap: false,
  },

  // Enable CSS code splitting
  css: {
    modules: {
      // Scope names: component_class_hash for debugging
      generateScopedName: '[local]_[hash:base64:5]',
    },
  },
});
