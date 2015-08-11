(function(define) {
	define([ 'jQuery' ], function() {
		'use strict';
		function RouterHandler(name, root) {
			this.name = name;
			this.root = root;
			console.log(this.root);
		}

		RouterHandler.prototype.start = function() {
			var div = $("<div>" + this.name + "</div>");
			$("#container").append(div);
			// Bootstrap angular module here!
			if (this.module) {
				this.module().then(function(context) {
					context.main.start();
				});
			}
		};

		return RouterHandler;
	});
})(define);