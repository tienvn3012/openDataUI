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
			var chart_id = 0;

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

			if((labels.length > 7) || (datas.length > 7)){
				chart_id = 1;
				if(labels.length >= datas.length){
					chart_data = this.parseAllowCol(labels,datas,data_title);
				}else{
					chart_data = this.parseAllowRow(labels,datas,data_title);
				}
			}else{
				chart_id = 0;
				if(labels.length >= datas.length){
					// for (var i = 0; i < datas.length; i++) {
					// 	var chart_item = {};
					// 	var chart_item_data = [];
					// 	chart_item['key'] = data_title[i];
					// 	for (var j = 0; j < labels.length; j++) {
					// 		var temp = {};
					// 		temp['x'] = labels[j];
					// 		temp['y'] = datas[i][j];
					// 		chart_item_data.push(temp);
					// 	}
					// 	chart_item['values'] = chart_item_data;
					// 	chart_data.push(chart_item);
					// }
					chart_data = this.parseAllowCol(labels,datas,data_title);
				}else{
					// for (var i = 0; i < labels.length; i++) {
					// 	var chart_item = {};
					// 	var chart_item_data = [];
					// 	chart_item['key'] = labels[i];
					// 	for (var j = 0; j < datas.length; j++) {
					// 		var temp = {};
					// 		temp['x'] = data_title[j];
					// 		temp['y'] = datas[j][i];
					// 		chart_item_data.push(temp);
					// 	}
					// 	chart_item['values'] = chart_item_data;
					// 	chart_data.push(chart_item);
					// }
					chart_data = this.parseAllowRow(labels,datas,data_title);
				}
			}

			

			return {
				chart : chart_id,
				data : chart_data
			};
		}

		this.parseAllowRow = function(labels,datas,data_title){
			var chart_data = [];
			for (var i = 0; i < labels.length; i++) {
				var chart_item = {};
				var chart_item_data = [];
				chart_item['key'] = labels[i];
				for (var j = 0; j < datas.length; j++) {
					var temp = {};
					temp['x'] = data_title[j];
					temp['y'] = datas[j][i];
					chart_item_data.push(temp);
				}
				chart_item['values'] = chart_item_data;
				chart_data.push(chart_item);
			}
			return chart_data;
		}

		this.parseAllowCol = function(labels,datas,data_title){
			var chart_data = [];
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