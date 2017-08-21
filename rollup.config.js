import babel from 'rollup-plugin-babel'
import butternut from 'rollup-plugin-butternut'

const pkg = require('./package.json')

const isTest = process.env.TEST

export default {
  input: './lib/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    !isTest && butternut(),
  ],
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: pkg.name,
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
}
