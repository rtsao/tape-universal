export default {
  entry: 'src/index.js',
  targets: [
    {format: 'es', dest: 'dist/node.es.js'},
    {format: 'cjs', dest: 'dist/node.cjs.js'},
  ],
  plugins: [],
};
