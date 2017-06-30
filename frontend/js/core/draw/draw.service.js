angular.module("core.draw").
	factory("drawService", function(){
		return {
			test: function(){
				bar_chart();
			}
		};
	});