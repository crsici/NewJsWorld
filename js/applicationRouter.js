(function(define) {
	define(function() {
		

		function ApplicationRouter(Router, handlers) {
			console.log("Router");
			console.log(Router);
			
			var myHandlers = {};

			
			
			
			var router = new Router.default();
			
			router.map(function(match) {
                setupHandlers(handlers, match);
            });

            router.getHandler = function(name) {
                console.log('getHandler name==========================' + name);
                return myHandlers[name];
            };

            // TODO these hash management functions should be extracted to another module and use a library to hide browser differences, this will do for now.
            $(window).on('hashchange', function(){
                console.log("Hash URL is " + location.hash.substr(1));
                router.handleURL(location.hash.substr(1));
            });

            $(document).ready(function(){
                console.log("Onload hash URL is " + location.hash.substr(1));
                router.handleURL(location.hash.substr(1));
            });

            router.updateURL = function(url) {
                window.location.hash = url;
            };

            router.log = function(msg) {
                console.log(msg)
            };
			
			function setupHandlers(handlers, match) {
                handlers.forEach(function(handler) {
                    if(myHandlers[handler.name]) {
                        throw new Error("Duplicate handler defined, check your spec.js handler names: " + handler.name);
                    }
                    myHandlers[handler.name] = {
                        handler: handler,

                        model: function(params) {
                            var res = {};
                            return res;
                        },

                        setup: function(params, transition) {
                            console.log("SETUP==============================");
                            handler.start();
                        },

                        exit: function() {
                        	console.log("EXIT");
                        },

                        events: {
                            willTransition: function(transition) {
                            	console.log("willTransition==============================");
                            }
                        }
                    };

                    
                        console.log("---------------------------");
                        console.log(handler.name);
                        console.log('match ' + handler.name + ' to ' + handler.name);
                        match("/"+handler.name).to(handler.name);
                   
                });
            }
			
			
		}
		return ApplicationRouter;
	});
})(define);