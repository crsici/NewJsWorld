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
		};

		return RouterHandler;
	});
})(define);