angular.module("console").
	component("console" , {
		transclude: true,
		bindings : {},
		
		templateUrl : "/frontend/js/console/console.template.html",
		controller : ["$routeParams","GetItem" , "drawService" , "consoleService"  , function console($routeParams,GetItem,drawService,consoleService){
	
			this.title = "Console";
			this.current_tab = 1;
			
			this.change_tab = function(tab){
				this.current_tab = tab;
			}
			this.isActive = function(tab){
				return this.current_tab === tab;
			}



			// this.items = [ //type : string-1 , date/time-2 , number-3
			// 	{
			// 		index : 0,
			// 		type : 1,
			// 		active : true,
			// 		title : "col_1"

			// 	},
			// 	{
			// 		index : 1,
			// 		type : 1,
			// 		active : false,
			// 		title : "col_2"

			// 	},
			// 	{
			// 		index : 2,
			// 		type : 2,
			// 		active : false,
			// 		title : "col_3"

			// 	},
			// 	{
			// 		index : 3,
			// 		type : 3,
			// 		active : true,
			// 		title : "col_4"

			// 	},
			// 	{
			// 		index : 4,
			// 		type : 3,
			// 		active : false,
			// 		title : "col_5"

			// 	},
			// 	{
			// 		index : 5,
			// 		type : 3,
			// 		active : false,
			// 		title : "col_6"

			// 	},
			// ];

			this.items = consoleService.renderItems(allData);

			this.isActiveItem = function($index){
				return this.items[$index].active;
			}
			this.toggle_item = function($index){
				this.items[$index].active = this.items[$index].active ? false : true;
			}

			this.drawChart = function(){
				drawService.test(consoleService.parseToChartData(this.items));

			}

		}]
	});

	// function renderItems(data){
	// 			var items = [];
	// 			var item = {};
	// 			for (var i = 0; i < data.length; i++) {
	// 				item = {};
	// 				item['index'] = i;
	// 				item['type'] = data[i]['type'];
	// 				item['title'] = data[i]['label'];
	// 				item['active'] = false;
	// 				item['data'] = data[i]['data'];
	// 				items.push(item);
	// 			}
	// 			return items;
	// 		}

	// function parseToChartData(data){
	// 	var chart_data = [];
		
	// 	var labels = [];
	// 	var datas = [];
	// 	var data_title = [];

	// 	for (var i = 0; i < data.length; i++) {
	// 		if(data[i]['active']){
	// 			if((data[i]['type'] == 1) || (data[i]['type'] == 2)){
	// 				labels = data[i]['data'];
	// 			}else{
	// 				datas.push(data[i]['data']);
	// 				data_title.push(data[i]['title']);
	// 			}
	// 		}
	// 	}

	// 	for (var i = 0; i < datas.length; i++) {
	// 		var chart_item = {};
	// 		var chart_item_data = [];
	// 		chart_item['key'] = data_title[i];
	// 		for (var j = 0; j < labels.length; j++) {
	// 			var temp = {};
	// 			temp['x'] = labels[j];
	// 			temp['y'] = datas[i][j];
	// 			chart_item_data.push(temp);
	// 		}
	// 		chart_item['values'] = chart_item_data;
	// 		chart_data.push(chart_item);
	// 	}

	// 	return chart_data;
	// }

	// name,v(m/s),a(m/s),t(s)
	// audi,23,4,23
	// ferari,43,2,53
	// toyota,32,2,65
	// mecedes,43,5,32