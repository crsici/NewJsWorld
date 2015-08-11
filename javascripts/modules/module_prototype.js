(function(define) {
	define(function() {
		'use strict';

		function ModulePrototype() {
		}

		ModulePrototype.prototype.getName = function() {
			return this.name;
		};

		ModulePrototype.prototype.start = function() {
			//Because cross site request error when run this application in local
			//We can't get view template from index.hmtl
			var view = $("<div ng-controller='Module1Controller'>Module with {{message}}!</div>").clone();
			var root = $("#container");
			var name = this.name;
			root.append(view);
			
			var controllerFunction = this.controllerWrapper.controller;
			var module = angular.module(name, []);

			module.controller(this.getName() + 'Controller',
					function($scope) {
						controllerFunction.call(this,$scope);
					});

			angular.bootstrap(view, [ name ]);
		};

		return ModulePrototype;
	});
})(define);
