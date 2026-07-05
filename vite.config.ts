import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true,
    allowedHosts: [
      "srv1807577.hstgr.cloud"
    ],
    proxy: {
      '/api/v1': {
        target: 'http://trpr.backend:8080',
        changeOrigin: true,
      }
    }
  }
})