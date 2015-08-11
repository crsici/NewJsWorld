define({
	handler : {
		create : {
			module : '../routerhandler',
			args : [ 'routerHandler1', {
				$ref : 'dom.first!.hello'
			}, {
				$ref : 'module'
			} ]
		},
		properties : {
			module : {
				$ref : 'module'
			}
		}
	},
	module : {
		wire : {
			spec : '../javascripts/modules/module1/module1-spec.js',
			defer : true
		}

	},
	plugins : [ {
		module : 'wire/debug'
	}, {
		module : 'wire/dom'
	} ]
});