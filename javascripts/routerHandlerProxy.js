(function(define) {
	define(function() {
		'use strict';

		function RouteHandlerProxy(name, spec) {
			this.name = name;
			this.spec = spec;
		}

		RouteHandlerProxy.prototype.start = function() {
			var proxy = this;

			this.spec().then(function(context) {
				console.log("Actual RouterHandler Start");
				context.handler.start();
			});

		};

		return RouteHandlerProxy;
	});
})(define);