import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function buildStatic() {
  try {
    await build({
      root: path.resolve(__dirname, 'client'),
      base: '/',
      build: {
        outDir: path.resolve(__dirname, 'docs'),
        emptyOutDir: true,
        sourcemap: false,
        minify: 'esbuild',
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
              ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
              animations: ['framer-motion', 'swiper']
            }
          }
        }
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'client/src'),
          '@/components': path.resolve(__dirname, 'client/src/components'),
          '@/lib': path.resolve(__dirname, 'client/src/lib'),
          '@/hooks': path.resolve(__dirname, 'client/src/hooks'),
          '@assets': path.resolve(__dirname, 'attached_assets'),
        }
      }
    });
    console.log('Build completed successfully');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildStatic();