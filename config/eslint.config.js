module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint/eslint-plugin', 'react'],
    extends: ['prettier'],
    rules: {
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/no-shadow': 1,
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/self-closing-comp': 'error',
        'no-unused-vars': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
    },
};
