import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import babel from 'rollup-plugin-babel';
import external from "rollup-plugin-peer-deps-external";
import minify from 'rollup-plugin-babel-minify';
// import { DEFAULT_EXTENSIONS } from '@babel/core';
// import rollupPluginUglifyEs from 'rollup-plugin-uglify-es';
import { terser } from 'rollup-plugin-terser';
import json from 'rollup-plugin-json';



export default [
  //ES5 bundle
  {
    input: 'src/Widget.tsx',
    output: {
      file: 'dist/lemma-chain-react.es5.js',
      format: 'es',
      sourcemap: true,
    },
    external: [
      'react'
    ],
    plugins: [
      external(),
      resolve({
        browser: true,
      }),
      typescript({
        rollupCommonJSResolveHack: true,
        target: 'es3'
      }),
      // babel({
      //     exclude: 'node_modules/**',
      //     extensions: [
      //       ...DEFAULT_EXTENSIONS,
      //       '.ts',
      //       '.tsx'
      //     ],
      // }),
      commonjs(),
      json()
    ]
  },

  //ES5 min bundle
  {
    input: 'src/Widget.tsx',
    output: {
      file: 'dist/lemma-chain-react.es5.min.js',
      format: 'es',
      sourcemap: true
    },
    external: [
      'react'
    ],
    plugins: [
      external(),
      resolve({
        browser: true,
      }),
      typescript({
        rollupCommonJSResolveHack: true,
        target: 'es5'
      }),
      // babel({
      //     exclude: 'node_modules/**',
      //     extensions: [
      //       ...DEFAULT_EXTENSIONS,
      //       '.ts',
      //       '.tsx'
      //     ],
      // }),
      commonjs(),
      json(),
      terser()
    ]
  },

  //ES6 bundle
  {
    input: 'src/Widget.tsx',
    output: {
      file: 'dist/lemma-chain-react.esm.js',
      format: 'es',
      sourcemap: true,
    },
    external: [
      'react'
    ],
    plugins: [
      external(
        
      ),
      resolve({
        browser: true,
      }),
      typescript({
        rollupCommonJSResolveHack: true,
        target: 'es6'
      }),
      // babel({
      //     exclude: 'node_modules/**',
      //     extensions: [
      //       ...DEFAULT_EXTENSIONS,
      //       '.ts',
      //       '.tsx'
      //     ],
      // }),
      commonjs(),
      json()
    ]
  },

  //ES6 min bundle
  {
    input: 'src/Widget.tsx',
    output: {
      file: 'dist/lemma-chain-react.esm.min.js',
      format: 'es',
      sourcemap: true,
    },
    external: [
      'react'
    ],
    plugins: [
      external(),
      resolve({
        browser: true,
      }),
      typescript({
        rollupCommonJSResolveHack: true,
        target: 'es6'
      }),
      // babel({
      //     exclude: 'node_modules/**',
      //     extensions: [
      //       ...DEFAULT_EXTENSIONS,
      //       '.ts',
      //       '.tsx'
      //     ],
      // }),
      commonjs(),
      json(),
      minify({comments: false})
    ]
  }
];