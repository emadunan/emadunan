import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',

  output: [
    {
      file: 'dist/index.js',
      format: 'esm',
      sourcemap: true
    }
  ],

  external: ['react', 'react-dom'],

  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json'
    }),

    postcss({
      modules: true,
      extract: 'styles.css',
      minimize: true
    }),

    terser()
  ]
};