define({ // Top level wire spec

	rootElement : {
		$ref : 'dom.first!.hello'
	},

	// Setup top level event bus
	applicationService : {
		create : {
			module : '../applicationService'
		}
	},
	router:{
		create: {
            module: '../applicationRouter',
            args: [
                { module: 'router' },
                [
                    { $ref: 'routerHandlerProxy1' },
                    { $ref: 'routerHandlerProxy2' }
                ]
            ]
        }
	},
	routerHandlerProxy1: {
        create: {
            module: '../RouterHandlerProxy',
            args: [
                'routerHandler1',
                { $ref: 'routerHandler1Spec' }
            ]
        }
    },
	routerHandlerProxy2: {
        create: {
            module: '../RouterHandlerProxy',
            args: [
                'routerHandler2',
                { $ref: 'routerHandler2Spec' }
            ]
        }
    },
    routerHandler1Spec: {
        wire: {
            spec: '../routerHandlers/routerHandler1-spec',
            defer: true
        }
    },
    routerHandler2Spec: {
        wire: {
            spec: '../routerHandlers/routerHandler2-spec',
            defer: true
        }
    },
	plugins : [
	// The debug plugin outputs wiring progress and diagnostic info
	// to the console
	{
		module : 'wire/debug'
	},
	// Load the basic wire.js dom plugin, which provides the `dom!`
	// resolver used above.
	{
		module : 'wire/dom'
	} ]
});