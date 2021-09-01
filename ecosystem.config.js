module.exports = {
	apps: [
		{
			name: 'aws-codedeploy',
			script: 'npx',
			args: 'npm start',
			interpreter: 'none',
			env: {
				NODE_ENV: 'development',
			},
		},
	],
}