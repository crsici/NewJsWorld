(function oldFunction() {
	this.old = (function() {
		return {
			name : "This is old function that doesn't define() to declare the dependencies"
		};
	})();
})();
