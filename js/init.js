require.config({
	baseUrl : './js',
	deps : [ 'main' ],
	paths : {
		'jQuery' : '../node_modules/jquery/dist/jquery',
		'underscore' : '../node_modules/underscore/underscore',
		'underscore' : '../node_modules/underscore/underscore',
		'domReady' : '../bower_components/requirejs-domready/domReady'
	},
	shim : {
		'jQuery' : {
			exports : '$'
		},
		'underscore' : {
			exports : '_'
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