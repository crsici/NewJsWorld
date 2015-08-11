define([], function() {
	'use strict';

	var application = {};

	application.start = function(context) {
		console.log('Started Application');
		context.then(function(c) {
			console.log(c.applicationService);
		});
	};

	return application;
});