module.exports = {
   env: {
      browser: true,
      es2021: true
   },
   extends: [
      'plugin:react/recommended',
      'airbnb',
      'plugin:@next/next/recommended',
      'prettier'
   ],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaFeatures: {
         jsx: true
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
   },
   plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
   rules: {
      'jsx-a11y/anchor-is-valid': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'import/no-unresolved': 'off',
      'react/jsx-filename-extension': [
         1,
         {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx']
         }
      ],
      'import/extensions': 0,
      'react/react-in-jsx-scope': 'off',
      'react/function-component-definition': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/prop-types': 'off',
      'prettier/prettier': [
         'error',
         {
            trailingComma: 'none',
            singleQuote: true,
            printWidth: 80,
            tabWidth: 3,
            semi: true,
            endOfLine: 'auto'
         }
      ]
   }
};
