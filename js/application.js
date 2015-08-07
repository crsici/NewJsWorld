define([], function() {
	'use strict';

	var application = {};

	application.start = function(context) {
		console.log('Started Application');
		context.then(function(c) {
			console.log(c.applicationService);
			c.rootElement.innerHTML = "Hello! " + c.applicationService.getName();
		});
	};

	return application;
});