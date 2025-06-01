module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended', // Runs Prettier as an ESLint rule
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'prettier',
  ],
  rules: {
    // If you want any rule tweaks, do it here.
    // For example, if you prefer no semicolons (Standard usually already enforces it):
    'prettier/prettier': ['error', { singleQuote: true, semi: false, printWidth: 80 }],

    // Example: turn off prop-types if you’re not using them:
    // 'react/prop-types': 'off',
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    'src/assets/',  // Double-check we aren’t linting images
    '*.config.js',  // If you have other configs you don’t want linted
  ],
}
