import { build } from 'vite';
import { resolve } from 'path';

async function buildForPages() {
  try {
    await build({
      root: resolve('./client'),
      build: {
        outDir: resolve('./dist'),
        emptyOutDir: true,
        rollupOptions: {
          input: resolve('./client/index.html')
        }
      },
      base: './'
    });
    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildForPages();