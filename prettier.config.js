module.exports = {
    arrowParens: 'avoid',
    singleQuote: true,
    printWidth: 100,
    tabWidth: 4,
    trailingComma: 'all',
    semi: true,
    overrides: [
        {
            files: ['*.json', '*.yaml', '*.yml', '*.jsonc'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
