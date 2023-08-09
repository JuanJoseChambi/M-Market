import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { //Lo que hace es que predetermine el local host que va a usar como puerto de conexion de parte de socket
    proxy:{
      '/socket.io': {
        target: 'http://localhost:3001',
        ws: true
      }
    }
  }
})
