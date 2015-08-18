require
		.config({
			// All js files under this folder can be loaded directly, exp :
			// main, empty
			baseUrl : './javascripts',
			deps : [ 'jQuery','oldmodule','main', 'rsvp', 'router', 'angular', 'text' ],
			paths : {
				'jQuery' : '../node_modules/jquery/dist/jquery',
				'underscore' : '../node_modules/underscore/underscore',
				'underscore' : '../node_modules/underscore/underscore',
				'domReady' : '../bower_components/requirejs-domready/domReady',
				'rsvp' : '../bower_components/router.js/vendor/deps/rsvp',
				'route-recognizer' : '../bower_components/router.js/vendor/deps/route-recognizer',
				'router' : '../bower_components/router.js/dist/router.amd',
				'text' : '../bower_components/requirejs-text/text',
				'angular' : '../bower_components/angular/angular'
			},
			shim : {
				'jQuery' : {
					exports : '$'
				},
				'oldmodule' : {
					exports : 'old'
				}
			},
			packages : [ {
				name : 'meld',
				location : '../node_modules/meld',
				main : 'meld'
			}, {
				name : 'when',
				location : '../node_modules/when',
				main : 'when'
			}, {
				name : 'wire',
				location : '../node_modules/wire',
				main : 'wire'
			} ]
		});