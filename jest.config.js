module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/domain/**/*.{ts,tsx}',
    '!<rootDir>/src/components/routes/*.{ts,tsx}',
    '!<rootDir>/src/styles/*.{ts,tsx}',
    '!<rootDir>/src/*.{ts,tsx}',
    '!**/*.d.ts'
  ],
  coverageDirectory: "./coverage/",
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  }
}
