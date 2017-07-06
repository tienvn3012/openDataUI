angular.module("dashboard").
	service("dashboardService" ,["chartValid", function (chartValid) {
		this.renderItems = function(data){
			var items = [];
			var item = {};
			for (var i = 0; i < data.length; i++) {
				item = {};
				item['index'] = i;
				item['type'] = data[i]['type'];
				item['title'] = data[i]['label'];
				item['data'] = data[i]['data'];
				item['percent'] = data[i]['percent'];

				if((item['type'] == 1) || (item['type'] == 2) && item['label'] == true){
					item['active'] = true;
				}else if(item['type'] == 3){
					item['active'] = true;
				}else{
					item['active'] = false;
				}


				items.push(item);
			}
			return items;
		}

		this.parseToChartData = function(data){
			var all_chart_data = [];
			var chart_data = [];
		
			var labels = [];
			var datas = [];
			var data_title = [];
			var data_percent = [];
			var chart_id = [];

			for (var i = 0; i < data.length; i++) {
				if(data[i]['active']){
					if((data[i]['type'] == 1) || (data[i]['type'] == 2)){
						labels = data[i]['data'];
					}else{
						datas.push(data[i]['data']);
						data_title.push(data[i]['title']);
						data_percent.push(data[i]['percent']);
					}
				}
			}

			for (var i = 0; i < chartValid.chartValid.length; i++) {
				chart_data = [];
				if(chartValid.chartValid[i].name(labels,data_title,data_percent)){
					chart_id.push(chartValid.chartValid[i].id);
					chart_data = chartValid.chartValid[i].data(labels,datas,data_title,data_percent);
					all_chart_data.push(chart_data);
				}
			}


			return {
				chart : chart_id,
				data : all_chart_data
			};
		}

		this.classifyChartId = function(id){
			switch(id){
				case 0 : return "VERTICAL_BAR_CHART";
				case 1 : return "HORIZONTAL_BAR_CHART";
				case 2 : return "PIE_CHART";
				case 3 : return "LINE_CHART";
				case 4 : return "AREA_CHART";
				case 5 : return "BUBBLE_CHART";
				case 6 : return "COMBO_BAR_LINE_CHART";
				default : return "";
			}
		}

	}]);