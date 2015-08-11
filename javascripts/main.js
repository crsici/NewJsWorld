require([ 'application', 'spec', 'empty', 'wire' ], function(application, spec,
		empty, wire) {
	'use strict';

	var context = wire(spec);
	
	console.log('//Bootstrap Wire context :' + context);
	application.start(context);

});
