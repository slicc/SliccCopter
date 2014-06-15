(function(data) {
	
	data.authenticateUser = function (next) {
		next(null, [{abc: "Hello", bvc: "There"}]);
	};

})(module.exports);