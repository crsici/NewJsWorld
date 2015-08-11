(function(define) {
	define(['jQuery'],function() {
		'use strict';
		
		function ApplicationRouter(Router, handlers) {

			var myHandlers = {};

			var router = new Router.default();
			
			router.map(function(match) {
                setupHandlers(handlers, match);
            });

            router.getHandler = function(name) {
                
                return myHandlers[name];
            };

            $(window).on('hashchange', function(){
                
                router.handleURL(location.hash.substr(1));
            });

            $(document).ready(function(){
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
                            console.log("START HANDLER " + handler.name);
                            handler.start();
                        },

                        exit: function() {
                        	console.log("EXIT");
                        },

                        events: {
                            willTransition: function(transition) {
                            	console.log("willTransition!");
                            }
                        }
                    };
                       
                    match("/"+handler.name).to(handler.name);
                   
                });
            }
			
			
		}
		return ApplicationRouter;
	});
})(define);