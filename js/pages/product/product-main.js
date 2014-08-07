var NS = NS || {};

(function() {

	NS.initialization["product"] = {
		'init': function() {
			// The init is always called when this is included on a page
			// with #product on thebody
			console.log('product:init');
		},
		'detail': function() {
			console.log('product:detail');
		}
	};

})();