module.exports = {
    transform: {
        '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
    },
    moduleNameMapper: {
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@contexts(.*)$': '<rootDir>/src/contexts$1',
        '^@content(.*)$': '<rootDir>/src/content$1',
        '^@constants(.*)$': '<rootDir>/src/constants$1',
        '^@hooks(.*)$': '<rootDir>/src/hooks$1',
        '^@images(.*)$': '<rootDir>/src/images$1',
        '^@styles(.*)$': '<rootDir>/src/styles$1',
        '^@utils(.*)$': '<rootDir>/src/utils$1',
        '^@libs(.*)$': '<rootDir>/src/libs$1',
    },
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby|gatsby-script|gatsby-link)/)`],
    globals: {
        __PATH_PREFIX__: '',
    },
    testEnvironmentOptions: {
        url: `http://localhost`,
    },
    setupFiles: ['<rootDir>/test-setup.js'],
};
