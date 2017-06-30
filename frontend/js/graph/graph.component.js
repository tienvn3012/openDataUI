angular.module("graph" ).
	component("graph" , {
		transclude: true,
		templateUrl : "/frontend/js/graph/graph.template.html",
		controller : ["$rootScope" , function($rootScope){
			$rootScope.draw = function(){
				bar_chart();
			};
			
		}],
	});