// @ts-check

import eslint from '@eslint/js'
import eslintPluginJest from 'eslint-plugin-jest'
import neostandard from 'neostandard'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: [
      '**/dist/',
    ],
  },
  eslint.configs.recommended,
  ...neostandard(),
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    files: ['test/**'],
    ...eslintPluginJest.configs['flat/recommended'],
    rules: {
      ...eslintPluginJest.configs['flat/recommended'].rules,
      'jest/prefer-expect-assertions': 'off',
    },
  },
  {
    rules: {
      'comma-dangle': ['error', {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
        imports: 'always-multiline',
        objects: 'always-multiline',
      }],
      'no-sequences': 'off',
      'space-before-function-paren': 'off',
      'spaced-comment': 'off',
      '@typescript-eslint/prefer-function-type': 'off',
    },
  },
]
