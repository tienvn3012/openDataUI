angular.module("core.draw").
	factory("drawService", function(){
		return {
			test: function(data){
				bar_chart(data);
			}
		};
	});