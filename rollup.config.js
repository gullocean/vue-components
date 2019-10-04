import buble from 'rollup-plugin-buble'
import common from 'rollup-plugin-commonjs'
import node from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/wrapper.js',
  external: [],
  output: [
    {
      format: 'esm',
      file: 'dist/index.esm.js',
    },
    {
      format: 'umd',
      name: 'vueComponents',
      file: 'dist/index.umd.js',
    },
    {
      format: 'cjs',
      file: 'dist/index.cjs.js',
    },
  ],
  plugins: [common(), node(), vue(), buble()]
}
