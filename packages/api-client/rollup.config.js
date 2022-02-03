import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import { generateBaseConfig } from '../../rollup.base.config';

const extensions = ['.ts', '.js'];

const server = {
  input: 'src/index.server.ts',
  output: [
    {
      file: pkg.server,
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
      rollupCommonJSResolveHack: false,
      useTsconfigDeclarationDir: true,
      tslib: require.resolve('typescript')
    }),
    commonjs({
      extensions
    }),
    nodeResolve({
      extensions
    })
  ]
};

export default [
  generateBaseConfig(pkg, true),
  server
];
