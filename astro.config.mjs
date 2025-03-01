// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'
import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
  // base: '.',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': 'src',
      },
    },
  },

  adapter: node({
    mode: 'standalone',
  }),
  server: {
    port: 3003,
    host: '127.0.0.1',
  },
})
