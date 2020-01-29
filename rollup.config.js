import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/image/register.ts',
    plugins: [typescript()],
    output: [
      {
        file: 'dist/image/register.js',
        format: 'iife'
      }
    ]
  }
];
