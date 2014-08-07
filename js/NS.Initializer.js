var NS = NS || {};

;(function($) {
	/**
	  * @date 05/26/2011
	  *	
	  * @class  A modified version of <a href="http://paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/">Paul Irish's DOM-ready execution</a>
	  * It takes the values defined in NS.initialization, and executes them in a logical order. First it executes
	  * global functionality, then page level based off the body class and id.
	  * 
	  * @example
	  * HTML:
	  * &lt;body id="product" class="detail"&gt;
	  *
	  * JS:
	  * // since we are on #product.detail, only that executes
	  * NS.initialization.product = {
	  *  "other-page": function() {
	  *     alert('this is the product other page')
	  *   },
	  * "detail": function() {
	  *     alert('this is the product detail page');
	  *  }
	  * } 
	  * 	
	  * @requires jQuery
	  */
	NS.Initializer = function() {
		var self = this;
	
		this.fire = function(func,funcname, args) {
			NS.initialization = NS.initialization || {};
			var namespace = NS.initialization;  // indicate your obj literal namespace here

			funcname = (funcname === undefined) ? 'init' : funcname;
			if (func !== '' && namespace[func] && typeof namespace[func][funcname] == 'function'){
				namespace[func][funcname](args);
			}
		};
	
		this.loadEvents = function(){
			$(function() {
				var bodyId = document.body.id;

				// hit up common first.
				self.fire('global');

				// do all the classes too.
				self.fire(bodyId);
				$.each(document.body.className.split(/\s+/),function(i,classnm){
					self.fire(bodyId,classnm);
				});

				self.fire('global','finalize');
			});
		}
	};

})(jQuery);