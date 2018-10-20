module.exports = {
	root: true,
	parser: "babel-eslint",
	env: {
		browser: true,
		node: true,
	},
	extends: "standard",
	plugins: [
		"html"
	],
	rules: {
		"rules": {
			"no-tabs": "off",
			"indent": ["error", "tab"],
			"quotes": [
				"error",
				"double",
				{
					"avoidEscape": true,
					"allowTemplateLiterals": true
				}
			],
			"space-before-function-paren": [0, "never"]
		}
	},
	globals: {}
}
