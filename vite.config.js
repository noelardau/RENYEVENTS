import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
  ],
  server: {
    host: true,
    watch: {
      usePolling: true,   // 👈 active le polling
      interval: 100,      // 👈 interval de 100ms (ajuste si besoin)
    }
  }
})
