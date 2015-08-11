define({
	handler : {
		create : {
			module : '../routerhandler',
			args : [ 'routerHandler2', {
				$ref : 'dom.first!.hello'
			} ]
		}
	},
	plugins : [ {
		module : 'wire/debug'
	}, {
		module : 'wire/dom'
	} ]
});