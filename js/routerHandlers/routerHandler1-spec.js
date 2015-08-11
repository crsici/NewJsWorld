define({
	handler : {
		create : {
			module : '../routerhandler',
			args : [ 'routerHandler1', {
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