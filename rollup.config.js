import buble from 'rollup-plugin-buble'
import common from 'rollup-plugin-commonjs'
import node from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/atoms/myText.vue',
  external: [],
  output: [
    {
      format: 'esm',
      file: 'dist/myText.esm.js',
    },
    {
      format: 'umd',
      name: 'vueMyText',
      file: 'dist/myText.umd.js',
    },
    {
      format: 'cjs',
      file: 'dist/myText.cjs.js',
    },
  ],
  plugins: [common(), node(), vue(), buble()]
}
