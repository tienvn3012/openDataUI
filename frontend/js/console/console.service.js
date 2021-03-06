angular.module("console").
	service("consoleService" ,["chartValid", function (chartValid) {
		var self = this;
		

		this.renderItems = function(data){
			var items = [];
			var item = {};
			for (var i = 0; i < data.length; i++) {
				item = {};
				item['index'] = i;
				item['type'] = data[i]['type'];
				item['title'] = data[i]['label'];
				item['active'] = false;
				item['data'] = data[i]['data'];
				item['percent'] = data[i]['percent'];
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

		

	}]);