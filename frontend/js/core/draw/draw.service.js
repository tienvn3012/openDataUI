angular.module("core.draw").
	factory("drawService", function(){
		function classifyDraw(id,data){
			switch(id){
				case 0 : bar_chart("#chart"+id+" svg",data);
					break;
				case 1 : horizontal_bar_chart("#chart"+id+" svg",data);
					break;
				case 2 : pie_chart("#chart"+id+" svg",data);
					break;
				// case 3 : return "LINE_CHART";
				// case 4 : return "AREA_CHART";
				// case 5 : return "BUBBLE_CHART";
				// case 6 : return "COMBO_BAR_LINE_CHART";
				default : return;
			}
		};

		return {
			draw: function(chart_id,data){
				d3.selectAll("svg > *").remove();
				if(chart_id[0] == 0){
					bar_chart(data);
				}else if(chart_id[1] ==1){
					horizontal_bar_chart(data);
				}
			},

			drawAll : function(allChartId,allChartData){
				for (var i = 0; i < allChartId.length; i++) {
					classifyDraw(allChartId[i],allChartData[i]);
				}
			}
		};
	});

// a,b,c,d,e,f,g,h,i
// x,1,2,5,2,8,6,4,3
// y,3,5,2,7,2,8,9,2
