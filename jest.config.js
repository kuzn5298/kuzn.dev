module.exports = {
    globals: {
        __PATH_PREFIX__: '',
    },
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/tests/__mocks__/file-mock.js',
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@contexts(.*)$': '<rootDir>/src/contexts$1',
        '^@content(.*)$': '<rootDir>/src/content$1',
        '^@constants(.*)$': '<rootDir>/src/constants$1',
        '^@hooks(.*)$': '<rootDir>/src/hooks$1',
        '^@images(.*)$': '<rootDir>/src/images$1',
        '^@styles(.*)$': '<rootDir>/src/styles$1',
        '^@utils(.*)$': '<rootDir>/src/utils$1',
        '^@libs(.*)$': '<rootDir>/src/libs$1',
        '^@tests(.*)$': '<rootDir>/tests$1',
    },
    setupFiles: ['<rootDir>/tests/loadershim.js'],
    setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'],
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
    testEnvironmentOptions: {
        url: `http://localhost`,
    },
    transform: {
        '^.+\\.[jt]sx?$': '<rootDir>/tests/jest-preprocess.js',
    },
    transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
};
