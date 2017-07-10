angular.module("core.draw").
	factory("drawService", function(){
		function classifyDraw(id,data_id,data){
			switch(id){
				case 0 : bar_chart("#chart"+id+"-"+data_id+" svg",data);
					break;
				case 1 : horizontal_bar_chart("#chart"+id+"-"+data_id+" svg",data);
					break;
				case 2 : pie_chart("#chart"+id+"-"+data_id+" svg",data);
					break;
				case 3 : line_chart("#chart"+id+"-"+data_id+" svg",data);
					break;
				// case 4 : return "AREA_CHART";
				case 5 : bubble_chart("#chart"+id+"-"+data_id+" svg",data);
					break;
				// case 6 : return "COMBO_BAR_LINE_CHART";
				default : return;
			}
		};

		return {
			draw: function(chart_id,data){
				d3.selectAll("svg > *").remove();
				classifyDraw(chart_id,data);
			},

			drawAll : function(allChartData){
				for (var i = 0; i < allChartData.length; i++) {
					for (var j = 0; j < allChartData[i]['data'].length; j++) {
						classifyDraw(allChartData[i]['chart'],j,allChartData[i]['data'][j]);
					}
				}
			}
		};
	});

// a,b,c,d,e,f,g,h,i
// x,1,2,5,2,8,6,4,3
// y,3,5,2,7,2,8,9,2
