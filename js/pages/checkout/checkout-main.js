var NS = NS || {};

(function() {
	
	NS.initialization["checkout"] = {
		'init': function() {
			// The init is always called when this is included on a page
			// with #checkout on thebody
			console.log('checkout:init');
		},
		'sign-up': function() {
			console.log('checkout:sign-up')
		},
		'billing': function() {
			console.log('checkout:billing')
		}
	};

})();