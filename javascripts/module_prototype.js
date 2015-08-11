(function(define) {
	define(function() {
		'use strict';

		function ModulePrototype() {
		}

		ModuleProto.prototype.getName = function() {
			return this.name;
		};

		ModuleProto.prototype.start = function(root, params) {
			var view = $(this.view).clone();
			var root = $("#container");
			var name = this.name;
			root.append(view);
			
			var controllerFunction = this.controllerWrapper.controller;
			var module = angular.module(name, []);

			module.controller(this.getName() + 'Controller',
					function($scope) {
						controllerFunction.call($scope);
					});

			angular.bootstrap(this.viewCopy, [ name ]);
		};

		return ModulePrototype;
	});
})(define);
