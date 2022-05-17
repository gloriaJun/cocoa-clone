module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    //     'unused-imports',
  ],
  rules: {
    // "linebreak-style": 0,
    // "import/prefer-default-export": 0,
    // "import/extensions": 0,
    // "no-use-before-define": 0,
    // "import/no-unresolved": 0,
    // "import/no-extraneous-dependencies": 0, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
    // "no-shadow": 0,
    // "@typescript-eslint/explicit-module-boundary-types": 0,
    //     'import/extensions': [
    //       'error',
    //       'ignorePackages',
    //       {
    //         js: 'never',
    //         jsx: 'never',
    //         ts: 'never',
    //         tsx: 'never',
    //       },
    //     ],
    //     'no-console': [
    //       'warn',
    //       {
    //         allow: ['warn', 'error'],
    //       },
    //     ],
    //     'import/no-unresolved': 'off',
    //     'no-use-before-define': 'off',
    //     '@typescript-eslint/no-use-before-define': ['error'],
    //     '@typescript-eslint/no-unused-vars': 'off',
    //     'unused-imports/no-unused-imports': 'error',
    //     'unused-imports/no-unused-vars': [
    //       'warn',
    //       {
    //         vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_',
    //       },
    //     ],
    //   },
  },
  // settings: {
  //   "import/resolver": {
  //     node: {
  //       extensions: [".js", ".jsx", ".ts", ".tsx"],
  //     },
  //   },
  //     'import/resolver': {
  //       typescript: {
  //         project: './tsconfig.json',
  //       },
  //     },
  //     'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  //     'import/parsers': {
  //       '@typescript-eslint/parser': ['.ts', '.tsx'],
  //     },
  // },
  //   ignorePatterns: [
  //     'build/',
  //     'node_modules/',
  //     '.pnp.cjs',
  //     '.yarn/',
  //   ],
  //   overrides: [
  //     {
  //       extends: [
  //         'plugin:cypress/recommended',
  //       ],
  //       files: [
  //         'cypress/**/*.ts',
  //       ],
  //       rules: {},
  //     },
  //   ],
};
