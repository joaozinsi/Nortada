import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: projectRoot,
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    allowedHosts: ['.loca.lt'],
    fs: {
      strict: true,
      allow: [projectRoot],
    },
  },
  optimizeDeps: {
    entries: [path.resolve(projectRoot, 'src/main.jsx')],
    include: ['react', 'react-dom/client', 'lucide-react'],
  },
});
