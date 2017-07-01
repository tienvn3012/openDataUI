angular.module("openData").
	config(["$routeProvider" , function config($routeProvider) {
		
		$routeProvider.
			when("/input", {
				template : '<input-data></input-data>'
			}).
			when("/index" , {
				template : '<console></console><graph></graph>'
			}).
			otherwise("/input");

	}]);