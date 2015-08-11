(function(define) {
	define(function() {
		'use strict';

		function RouteHandlerProxy(name, spec) {
			this.name = name;
			this.spec = spec;
		}

		RouteHandlerProxy.prototype.start = function() {
			var proxy = this;
			console.log("RouteHandlerProxy Start" );
			if (!proxy.proxied) {
				this.spec().then(function(context) {
					console.log("Actual RouterHandler Star" );
					context.handler.start();
				});
			}
		};

		return RouteHandlerProxy;
	});
})(define);