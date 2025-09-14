const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const ESLintPlugin = require('eslint-webpack-plugin');

const plugins = defaultConfig.plugins.filter(p => {
	if (Object.values(p).length === 2 && Object.values(p)?.[1]['filename'] && Object.values(p)?.[1]['filename'] === '[name]-rtl.css') {
		return false;
	}
	return true;
});

module.exports = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry(),
		shortcode: "./src/shortcode/shortcode.js",
		form: "./src/form/form.js",
		myform: "./src/form/myform.js",
		easy_testimonial: "./src/form/easy_testimonal.js"
	},
	plugins: [
		...plugins,
		new ESLintPlugin()
	],
	optimization: {}
};