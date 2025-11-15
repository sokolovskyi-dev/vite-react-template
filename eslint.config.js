import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['dist', 'node_modules'],
  },

  {
    files: ['src/**/*.{js,jsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.jsx'],
        },
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
      'react-refresh': reactRefresh,
      prettier,
    },

    rules: {
      // Base JS rules
      ...js.configs.recommended.rules,

      // React
      ...react.configs.recommended.rules,

      // Accessibility
      ...jsxA11y.configs.recommended.rules,

      // Hooks rules
      ...reactHooks.configs.recommended.rules,

      // Import rules
      ...importPlugin.configs.recommended.rules,

      // Allow Vite-style absolute public imports: `/file`.
      'import/no-unresolved': ['error', { ignore: ['^/'] }],

      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [{ pattern: '@/**', group: 'internal', position: 'before' }],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],

      // Do not require React import in JSX (React 17+)
      'react/react-in-jsx-scope': 'off',

      // Prevent broken Fast Refresh cases
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Format via Prettier
      'prettier/prettier': 'warn',
    },
  },
];
