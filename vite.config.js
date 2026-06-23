import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh' // or whatever import is already there

export default defineConfig({
  plugins: [react()],
  base: '/Xora/', 
})
