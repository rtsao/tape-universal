import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

export default {
  entry: 'src/index.js',
  targets: [
    {format: 'es', dest: 'dist/browser.es.js'},
    {format: 'cjs', dest: 'dist/browser.cjs.js'},
  ],
  plugins: [
    commonjs({include: 'node_modules/**'}),
    globals(),
    builtins(),
    resolve({browser: true}),
  ],
};
