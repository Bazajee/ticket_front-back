import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command, mode }) => {
   return {
      plugins: [
         vue(),
      ],
      server: {
         port: 5173,
         open: true,
         proxy: {
            '^/api/.*': {
               target: 'http://localhost:3002',
               ws: true,
               secure: false,
               changeOrigin: true,
            },
         }
      },
   }
})
