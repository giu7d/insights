import path from 'node:path'

import { includeIgnoreFile } from '@eslint/compat'
import eslint from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import tsEslint from 'typescript-eslint'
import turboPlugin from 'eslint-plugin-turbo'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'

// @ts-ignore
const workspacePath = path.resolve(import.meta.dirname, '../../../')
const workspaceGitIgnorePath = path.join(workspacePath, '.gitignore')

/**
 * All packages should use this rule
 */
export const restrictEnvAccess = tsEslint.config(
  { ignores: ['**/env.ts'] },
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    rules: {
      'no-restricted-properties': [
        'error',
        {
          object: 'process',
          property: 'env',
          message:
            "Use `import { env } from '@/env'` instead to ensure validated types.",
        },
      ],
      'no-restricted-imports': [
        'error',
        {
          name: 'process',
          importNames: ['env'],
          message:
            "Use `import { env } from '@/env'` instead to ensure validated types.",
        },
      ],
    },
  },
)

export default tsEslint.config(
  // Ignore files not tracked by VCS and any config files
  includeIgnoreFile(workspaceGitIgnorePath),
  {
    ignores: ['**/*.config.*', '**/*.config.*'],
  },
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    plugins: {
      import: importPlugin,
      turbo: turboPlugin,
      'unused-imports': unusedImportsPlugin,
    },
    extends: [
      eslint.configs.recommended,
      ...tsEslint.configs.recommended,
      ...tsEslint.configs.recommendedTypeChecked,
      ...tsEslint.configs.stylisticTypeChecked,
    ],
    rules: {
      ...turboPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
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
      // Unused Params, Vars & Imports
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      // Group & Sort Imports
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import/order': [
        'error',
        {
          groups: [
            'type',
            'builtin',
            'external',
            'internal',
            'unknown',
            ['parent', 'sibling', 'index'],
          ],
          pathGroups: [
            {
              pattern: 'node:',
              group: 'builtin',
            },
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
              pattern: '@insights/**',
              group: 'internal',
            },
            {
              pattern: '@/**',
              group: 'unknown',
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
    },
  },
  {
    linterOptions: { reportUnusedDisableDirectives: true },
    languageOptions: { parserOptions: { projectService: true } },
  },
)
