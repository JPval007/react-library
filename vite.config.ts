import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Put here your base for deployment
export default defineConfig({
  plugins: [react()],
})
