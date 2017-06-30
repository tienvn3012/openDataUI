angular.module("core.consoleItem").
	// factory("GetItem",['$resource' , function($resource){
	// 	return $resource("opendata/:fileId",{},{
	// 		query : {
	// 			method : 'GET',
	// 			params:{fileId : ""}
	// 		}
	// 	});
	// }]);
	factory("GetItem",['$resource' , function($resource){
		return $resource("a.json",{},{
			query : {
				method : 'GET',
			}
		});
	}]);