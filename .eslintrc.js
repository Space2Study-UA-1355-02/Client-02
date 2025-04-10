module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vitest-globals/env': true
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:vitest-globals/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  plugins: ['react', 'testing-library', 'react-hooks'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'prefer-arrow-callback': ['warn'],
    'react/jsx-boolean-value': 'warn',
    'react/jsx-closing-bracket-location': 'warn',
    'react/jsx-equals-spacing': 'warn',
    'react/jsx-first-prop-new-line': 'warn',
    'react/jsx-handler-names': 'warn',
    'react/jsx-key': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-pascal-case': 'warn',
    'react/jsx-sort-props': 'warn',
    'react/jsx-no-useless-fragment': [
      'warn',
      {
        allowExpressions: true
      }
    ],
    'react/jsx-max-depth': [
      'warn',
      {
        max: 5
      }
    ],
    'react/jsx-wrap-multilines': [
      'warn',
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens-new-line',
        arrow: 'parens',
        condition: 'parens',
        logical: 'parens',
        prop: 'ignore'
      }
    ],
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off'
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.eslint.json'
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-restricted-imports': [
          'warn',
          {
            name: 'react-redux',
            importNames: ['useSelector', 'useDispatch'],
            message:
              'Use typed hooks `useAppDispatch` and `useAppSelector` instead.'
          }
        ]
      }
    },
    {
      files: ['**/src/tests/**/*.*.js', '**/src/tests/**/*.js'],
      env: {
        jest: true
      }
    }
  ]
}
