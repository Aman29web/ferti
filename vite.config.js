import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),        // Required for React and JSX support
    tailwindcss(),  // Tailwind CSS support
  ],
  optimizeDeps: {
    include: ['framer-motion'], // Ensure Framer Motion is pre-bundled
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
});
