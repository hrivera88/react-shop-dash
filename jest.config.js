module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{js|tsx}'],
	coverageDirectory: 'coverage',
	testEnvironment: 'jsdom',
	preset: 'ts-jest',
	transform: {
		'^.+\\.(ts|tsx)?$': 'ts-jest',
		'^.+\\.(js|jsx|tsx)$': 'babel-jest',
	},
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
		'\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.ts',
	},
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
