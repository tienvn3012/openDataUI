angular.module("core.draw").
	factory("drawService", function(){
		return {
			test: function(chart_id,data){
				d3.selectAll("svg > *").remove();
				if(chart_id == 0){
					bar_chart(data);
				}else if(chart_id ==1){
					horizontal_bar_chart(data);
				}
			}
		};
	});

// a,b,c,d,e,f,g,h,i
// x,1,2,5,2,8,6,4,3
// y,3,5,2,7,2,8,9,2