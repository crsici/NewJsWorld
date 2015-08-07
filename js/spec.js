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