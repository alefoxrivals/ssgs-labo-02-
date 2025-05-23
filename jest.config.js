const config = {
    collectCoverageFrom: [
        '**/src/**/*.js',
        '!**/src/index.js',
        '!**/node_modules/**',
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        },
    }
};

module.exports = config;