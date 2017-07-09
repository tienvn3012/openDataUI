angular.module("dashboard").
	service("dashboardService" ,["chartValid", function (chartValid) {
		this.renderItems = function(data){
			var items = [];
			var item = {};
			for (var i = 0; i < data.length; i++) {
				item = {};
				item['index'] = i;
				item['type'] = data[i]['type'];
				item['title'] = data[i]['title'];
				item['label'] = data[i]['label'];
				item['data'] = data[i]['data'];
				item['percent'] = data[i]['percent'];
				item['category'] = data[i]['category'];

				var category_flag = true;
				if((item['type'] == 1) || (item['type'] == 2) && item['label'] == true){
					item['active'] = true;
				}else if ((item['type'] == 1) || (item['type'] == 2) && category_flag == true) {
					item['active'] = true;
					category_flag = false;
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
			var data_labels = [];
			var chart_id = null;


			// var data_title = [];
			// var data_percent = [];
			// var chart_id = [];
			// var data_category = [];



			for (var i = 0; i < data.length; i++) {
				
					if((data[i]['type'] == 1) || (data[i]['type'] == 2)){
						if(data[i]['label']){
							labels = data[i];
							continue;
						}
						data_labels.push(data[i]);
					}else{
						datas.push(data[i]);
					}
				
			}

			for (var i = 0; i < chartValid.chartValid.length; i++) {
				chart_data = [];
				chart_id = 0;
				if(chartValid.chartValid[i].name(labels,data_labels,datas)){

					chart_id = chartValid.chartValid[i].id;
					chart_data = chartValid.chartValid[i].data(labels,data_labels,datas);
					
					all_chart_data.push({
						chart : chart_id,
						data  : chart_data
					});
				}
			}


			return all_chart_data;
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