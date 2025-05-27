import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/', // Base para desarrollo
  }

  // Para builds de producción (como para GitHub Pages)
  if (command === 'build') {
    // Reemplaza 'E-commerce' con el nombre EXACTO de tu repositorio de GitHub
    config.base = '/E-commerce/'
  }

  return config
})