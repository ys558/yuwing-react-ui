import commonjs from "@rollup/plugin-commonjs";
import resolves from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript";
import dts from "@rollup/plugin-dts"

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "es",
        sourcemap: true,
      },
    ],
    external: ["@types/node"],
    plugins: [
      commonjs(),
      resolves(),
      typescript({
        tsconfig: "./tsconfig.json"
      }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [
      {
        file: 'dist/esm/types/index.d.ts',
        format: 'esm'
      },
      // {
      //   file: 'dist/cjs/types/index.d.ts',
      //   format: 'cjs'
      // }
    ],
    plugins: [
      dts()
    ]
  }
]