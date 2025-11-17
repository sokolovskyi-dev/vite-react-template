// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

// ⬅️ Добавлен для JSX-парсинга
import babelParser from '@babel/eslint-parser';

export default [
  {
    ignores: ['dist', 'node_modules'],
  },

  // Core JS rules
  js.configs.recommended,

  // Disable all ESLint formatting rules (Prettier will handle formatting)
  prettierConfig,

  {
    files: ['src/**/*.{js,jsx}'],

    languageOptions: {
      parser: babelParser, // ⬅️ ВАЖНО: исправляет ошибки JSX
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,

      // Не требует babel.config.js
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'], // ⬅️ Чтобы парсер понимал JSX
        },
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
      prettier: prettierPlugin,
    },

    rules: {
      // React
      ...react.configs.recommended.rules,

      // Hooks
      ...reactHooks.configs.recommended.rules,

      // A11y
      ...jsxA11y.configs.recommended.rules,

      // Imports
      ...importPlugin.configs.recommended.rules,
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

      // Fast Refresh (Vite)
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // React 17+
      'react/react-in-jsx-scope': 'off',

      // Prettier formatting
      'prettier/prettier': ['warn', { endOfLine: 'lf' }],
    },
  },
];
