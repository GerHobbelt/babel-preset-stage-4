'use strict';
/* eslint-disable import/no-dynamic-require */
module.exports = (api, options) => {
	const transformModules = !options || options.modules !== false;
	const plugins = require(`./plugins/best-match`)
		.filter(module => module !== '@gerhobbelt/babel-plugin-transform-modules-commonjs' || transformModules)
		.map(module => require(module).default);

	return {plugins};
};
