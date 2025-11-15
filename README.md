# ⚡️ Vite React Template (2025)

A modern, production-ready Vite + React + SWC starter with strict code quality, clean architecture, and perfect developer experience.
Designed for real-world scalable applications using 2025 frontend standards.

## 🚀 Features

- ⚡ Vite + SWC — ultra-fast dev & build
- 🧩 React 19 — modern runtime
- 🧹 ESLint 9 (Flat Config) — React, Hooks, Import, A11y, Prettier
- 🎨 Prettier 3 — automatic formatting
- 🪝 Husky 9 + lint-staged — auto-fix before commit
- 🔍 Strict import validation (alias resolver, no-unresolved)
- 🧭 Alias @ → src (Vite + VS Code + ESLint)
- 🌗 Modern CSS architecture (design tokens, resets, layout system)
- 📱 Mobile-first viewport + safe-area insets
- 🛑 vite-plugin-checker → ESLint overlay in browser
- 🐢 Guaranteed Node 20+ compatibility

## 📦 Getting Started

✅ The fastest and cleanest way to start:

1. Open the repository:
   https://github.com/sokolovskyi-dev/vite-react-template

2. Click the green button:
   **“Use this template → Create a new repository”**

3. Choose a name (e.g. my-app)

4. Clone your new repository:

```bash
git clone https://github.com/YOUR_USERNAME/my-app
cd my-app
npm install
npm run dev
```

This creates a fresh project without git history, fully ready for development.
Husky pre-commit hooks are automatically enabled after `npm install`.

🔧 After creating a new project from this template, update your package.json metadata:

```json
"homepage": "https://your_username.github.io/your_repo_name/",
"repository": {
  "type": "git",
  "url": "https://github.com/your_username/your_repo_name.git"
},
"bugs": {
  "url": "https://github.com/your_username/your_repo_name/issues"
}
```

## 🧩 Scripts

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint \"src/**/*.{js,jsx}\"",
  "format": "prettier --write \"src/**/*.{js,jsx,css,json,md}\"",
  "prepare": "husky"
}
```

❗ Updated for Husky 9 (no deprecated husky install).

## 🪝 Pre-Commit Code Quality (Husky 9)

lint-staged automatically:

- 🧹 Runs ESLint fix
- 🎨 Applies Prettier formatting
- ⛔ Blocks commit if code is broken
  Config:

```json
"lint-staged": {
  "src/**/*.{js,jsx}": [
    "eslint --fix",
    "prettier --write"
  ]
}
```

Hook location:

```bash
.husky/pre-commit
```

Contents:

```bash
npx lint-staged
```

## 🎨 CSS Architecture

This template includes a modern, modular, scalable CSS foundation inspired by:

- Vercel design system
- Radix UI primitives
- Tailwind Core principles
- Large-scale React apps

🗂 Structure (src/styles)
| File | Purpose |
| ------------------ | ------------------------------------------------------------- |
| **variables.css** | Design tokens: colors, spacing, radiuses, fonts, animations |
| **base.css** | Global resets, typography, dark mode, safe-area |
| **layout.css** | Container system, responsive spacing, sections |
| **components.css** | Buttons, inputs, form controls, focus-visible styles |
| **utils.css** | Helper classes: visually-hidden, flex-center, no-scroll, etc. |

🎨 CSS entry point (index.css):

```css
@import 'modern-normalize/modern-normalize.css';
@import './variables.css';
@import './base.css';
@import './layout.css';
@import './components.css';
@import './utils.css';
```

## 🧭 Path Aliases (@ → src)

Import like this:

```js
import Button from '@/components/Button';
import useUser from '@/hooks/useUser';
```

Configured in:

```
vite.config.js
jsconfig.json
eslint.config.js
```

## 💡 Recommended VS Code Extensions

.vscode/extensions.json:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "streetsidesoftware.code-spell-checker",
    "bradlc.vscode-tailwindcss"
  ]
}
```

## 🔧 Upgrade to TypeScript (optional)

Install TS:

```bash
npm i -D typescript @types/react @types/react-dom
npx tsc --init
```

Rename files:

```
main.jsx → main.tsx
App.jsx → App.tsx
*.jsx → *.tsx
```

Install resolver:

```bash
npm i -D eslint-import-resolver-typescript
```

Update eslint.config.js:

```json
"import/resolver": {
  alias: {
    map: [["@", "./src"]],
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  typescript: {}
}
```

## 🚀 Deployment

🔺 Vercel (recommended)

- Just push to GitHub → import repo → done.

🐙 GitHub Pages

- Add to vite.config.js:

```json
export default defineConfig({
  base: '/your_repo_name/',
});
```

Then:

```json
npm run build
```

Deploy 🗂 /dist folder.

## 📄 License

MIT © 2025 Serhii Sokolovskyi

You may freely use, modify and distribute this template.

## ⭐ Support the project

If this template helped you:

- ⭐ Star the repo
- 🍴 Fork it
- 🧑‍💻 Follow the author
- 🐙 https://github.com/sokolovskyi-dev

## 🎉 Happy Coding!

Build fast, clean, modern React apps — with zero setup.
