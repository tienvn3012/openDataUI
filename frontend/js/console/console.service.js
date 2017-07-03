angular.module("console").
	service("consoleService" , function () {
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
				items.push(item);
			}
			return items;
		}

		this.parseToChartData = function(data){
			var chart_data = [];
		
			var labels = [];
			var datas = [];
			var data_title = [];

			for (var i = 0; i < data.length; i++) {
				if(data[i]['active']){
					if((data[i]['type'] == 1) || (data[i]['type'] == 2)){
						labels = data[i]['data'];
					}else{
						datas.push(data[i]['data']);
						data_title.push(data[i]['title']);
					}
				}
			}

			for (var i = 0; i < datas.length; i++) {
				var chart_item = {};
				var chart_item_data = [];
				chart_item['key'] = data_title[i];
				for (var j = 0; j < labels.length; j++) {
					var temp = {};
					temp['x'] = labels[j];
					temp['y'] = datas[i][j];
					chart_item_data.push(temp);
				}
				chart_item['values'] = chart_item_data;
				chart_data.push(chart_item);
			}

			return chart_data;
		}

	});