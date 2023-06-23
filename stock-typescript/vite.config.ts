import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Setting up commponent import 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname) }] // replaces @ with current dir folder
  },
})
