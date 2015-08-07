Build this program by
npm install
bower install
open index.html by browser. That's it!

1. Create project
	npm init
2. Add require dependency
	"devDependencies": {
	    "requirejs": "^2.1.18",
	    "jquery": "~2.1.0",
	    "underscore": "~1.4.4"
	}
3. npm install to install package
4. Create index file
5. Create require configuration file init.js
	baseUrl : RequireJS loads all code relative to a baseUrl
	deps : An array of dependencies to load
	shim : use shim config for non-AMD scripts, scripts that do not already call define()
6. Create application module by define method . application.js
	http://requirejs.org/docs/api.html#funcmodule 
7. Create main.js that bootstraps application by require method. Note that require/ requirejs is the same method.
	require([  'application', ], function(application) {
	    //This function is called when js/main.js is loaded.
	    //The application argument will hold the module value for js/application.js
	});
	
8. Create applicationSevice/ empty module for testing purpose
9. Adding 
	"wire": "~0.10.6"
    -> "when":"*"
    -> "meld":"*"
    -> bower/ "requirejs-domready": "~2.0.1" because npm can't find requirejs-domready
10. Adding spec.js it's wire context configuration
	wire/dom plugin support for dom.first!.hello = document.querySelector(".hello")
11. Bootstrap wirejs by calling:
	var context = wire(spec);
12. Adding bower dependency for router handler
	"router.js": "git://github.com/tildeio/router.js.git#cde84fd1a401dfe2c337fdb0dde755b8df939482",
    "rsvp": "~3.0.17"

	
	
	
	