import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/textalter/",
  server: {
    host: '0.0.0.0',
    port: 5173, // or whatever port you're using
  }
})
