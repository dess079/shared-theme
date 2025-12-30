import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/index.js', format: 'cjs' },
    { file: 'dist/index.esm.js', format: 'esm' }
  ],
  plugins: [
    nodeResolve({
      preferBuiltins: false
    }),
    typescript()
  ],
  external: [
    'react',
    'react/jsx-runtime',
    '@mui/material',
    '@mui/material/styles',
    '@mui/material/CssBaseline',
    '@mui/icons-material',
    '@emotion/react',
    '@emotion/styled'
  ]
};