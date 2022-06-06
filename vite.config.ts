import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueTypeImports from 'vite-plugin-vue-type-imports'
import * as path from 'path'
import * as fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig((config) => {
  // console.log(config)
  // fs.writeFileSync('./test.file', JSON.stringify(config))
  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/components/index.ts'),
        name: 'vueImagesGrid',
        fileName: (format) => `vue-ig.${format}.js`,
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
    plugins: [vue(), VueTypeImports()],
  }
})
