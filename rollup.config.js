import babel from 'rollup-plugin-babel';

export default {
  dest: 'wwwroot/bundle-rollup.js',
  entry: 'Source/scripts/app.js',
  format: 'iife',
  globals: {
    app: 'app',
  },
  moduleName: 'app',
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: [
        ["latest", { es2015: { modules: false } }],
      ],
      plugins: ["external-helpers"]
    })
  ],
};
