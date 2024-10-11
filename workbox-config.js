module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{js,css,html,png,JPG,jpg,json,mp3}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};