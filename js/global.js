/**
 * @fileOverview Global functionality. Contains a script loader that will 
 * control the initialization flow, initial instantiation of the namespace.
 */

var NS = NS || {};

(function($) {
	/**
	 * @namespace Object that defines which JS gets executed, and in what order.
	 * @see NS.Initializer
	 */
	NS.initialization = {
		global: {
			init: function(){
				console.log('global:init');
			},
			finalize: function(){
				console.log('global:finalize');
			}
		}
	};

	// kick it all off here 
	var init = new NS.Initializer();
		init.loadEvents();
	
})(jQuery);
