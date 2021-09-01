module.exports = {
	apps: [
		{
			name: 'aws-codedeploy',
			script: 'npx',
			args: 'node index.js',
			interpreter: 'none',
			env: {
				NODE_ENV: 'development',
			},
		},
	],
}