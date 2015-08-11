(function(define) {
	define(function() {
		'use strict';
		function Controller1() {
			this.controller = function($scope) {
				$scope.message = " Controller 1";
			};
		}
		return Controller1;
	});
})(define);