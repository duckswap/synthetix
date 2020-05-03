'use strict';

const { usePlugin } = require('@nomiclabs/buidler/config');

usePlugin('buidler-gas-reporter');

const config = require('./buidler.config');

module.exports = Object.assign({}, config, {
	gasReporter: {
		showTimeSpent: true,
		currency: 'USD',
		outputFile: 'test-gas-used.log',
	},
	networks: {
		localhost: {
			timeout: 60e3,
		},
	},
});