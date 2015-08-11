define({
//	view : {
//		render : {
//			template : {
//				module : 'text!./index.html'
//			}
//		}
//	},

	modulePrototype : {
		create : '../../../modules/module_prototype'
	},
	main : {
		prototype : 'modulePrototype',
		properties : {
			name : 'Module1',
			controllerWrapper : {
				create : {
					module : './controller1.js',
					isConstructor : true
				}
			},
			angular : {
				module : 'angular'
			}
//			,
//
//			view : {
//				$ref : 'view'
//			}
		}
	},

	plugins : [ 'wire/dom', 'wire/dom/render' ]
});