import pkg from './package.json';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
const controllers = require('./open-api-sources.json');

const extensions = ['.ts', '.js'];

const config = controllers.map(controller => ({
  input: `src/api/${controller.name}/api.ts`,
  output: [
    {
      file: `${controller.name}/index.cjs.js`,
      format: 'cjs',
      sourcemap: true
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    nodeResolve({
      extensions
    }),
    typescript({
      // eslint-disable-next-line global-require
      typescript: require('typescript'),
      useTsconfigDeclarationDir: true
    })
  ]
}));

export default config;
