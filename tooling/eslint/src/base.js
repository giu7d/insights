/// <reference types="./types.d.ts" />

import eslint from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import tseslint from 'typescript-eslint'

/**
 * All packages that leverage t3-env should use this rule
 */
export const restrictEnvAccess = tseslint.config({
  files: ['**/*.js', '**/*.ts', '**/*.tsx'],
  rules: {
    'no-restricted-properties': [
      'error',
      {
        object: 'process',
        property: 'env',
        message:
          "Use `import { env } from '~/env'` instead to ensure validated types.",
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        name: 'process',
        importNames: ['env'],
        message:
          "Use `import { env } from '~/env'` instead to ensure validated types.",
      },
    ],
  },
})

export default tseslint.config(
  {
    // Globally ignored files
    ignores: ['**/*.config.js', '**/*.config.mjs'],
  },
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    plugins: {
      import: importPlugin,
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    rules: {
      // Typescript Eslint
      'no-unused-vars': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
      ],
      '@typescript-eslint/no-misused-promises': [
        2,
        { checksVoidReturn: { attributes: false } },
      ],
      '@typescript-eslint/no-unnecessary-condition': [
        'error',
        {
          allowConstantLoopConditions: true,
        },
      ],
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      // Group & Sort Imports
      'import/order': [
        'error',
        {
          groups: [
            'type',
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
            },
            {
              pattern: 'react-native',
              group: 'builtin',
            },
            {
              pattern: 'expo',
              group: 'builtin',
            },
            {
              pattern: '@splitter/**',
              group: 'internal',
            },
            {
              pattern: '@/**',
              group: 'parent',
            },
          ],
          'newlines-between': 'always',
          pathGroupsExcludedImportTypes: ['builtin', 'internal'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true, // handled by import/order
          ignoreMemberSort: false,
        },
      ],
    },
  },
  {
    linterOptions: { reportUnusedDisableDirectives: true },
    languageOptions: { parserOptions: { project: true } },
  },
)
