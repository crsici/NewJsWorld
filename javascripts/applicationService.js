(function (define) {
    define(function () {
        'use strict';

        function ApplicationService() {
            this.error = function(){
            	//Something
            }
        }
        ApplicationService.prototype.getName  = function(){
            	return 'Hello new age of JS application';
            }

        return ApplicationService;
    });
})(define);