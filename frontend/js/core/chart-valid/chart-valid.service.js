angular.module("core.chartValid").
	service("chartValid" , function () {
		var self = this;

		this.chartValid = [
			{
				name : function(labels,data_title,data_percent){
					return self.verticalBarChartValid(labels,data_title,data_percent);
				},
				data : function(labels,datas,data_title,data_percent){
					return self.parseToVerticalBarData(labels,datas,data_title,data_percent);
				},
				id : 0
			},
			{
				name : function(labels,data_title,data_percent){
					return self.horizontalBarChartValid(labels,data_title,data_percent);
				},
				data : function(labels,datas,data_title,data_percent){
					return self.parseToHorizontalBarData(labels,datas,data_title,data_percent);
				},
				id : 1
			},
			{
				name : function(labels,data_title,data_percent){
					return self.pieChartValid(labels,data_title,data_percent);
				},
				data : function(labels,datas,data_title,data_percent){
					return self.parseToPieData(labels,datas,data_title,data_percent);
				},
				id : 2
			},
			{
				name : function(labels,data_title,data_percent){
					return self.lineChartValid(labels,data_title,data_percent);
				},
				data : function(labels,datas,data_title,data_percent){
					return self.parseToLineData(labels,datas,data_title,data_percent);
				},
				id : 3
			},
			{
				name : function(labels,data_title,data_percent){
					return self.areaChartValid(labels,data_title,data_percent);
				},
				data : function(labels,datas,data_title,data_percent){
					return self.parseToAreaData(labels,datas,data_title,data_percent);
				},
				id : 4
			},
			{
				name : function(labels,data_title,data_percent){
					return self.bubbleChartValid(labels,data_title,data_percent);
				},
				data : function(labels,datas,data_title,data_percent){
					return self.parseToBubbleData(labels,datas,data_title,data_percent);
				},
				id : 5
			},
			{
				name : function(labels,data_title,data_percent){
					return self.comboChartValid(labels,data_title,data_percent);
				},
				data : function(labels,datas,data_title,data_percent){
					return self.parseToComboData(labels,datas,data_title,data_percent);
				},
				id : 6
			},
		];


		this.verticalBarChartValid = function(labels,data_title,data_percent){
			return true;
		}

		this.horizontalBarChartValid = function(labels,data_title,data_percent){
			return true;
		}

		this.pieChartValid = function(labels,data_title,data_percent){
			if(data_percent.length == 1)
				if (data_percent[0])
					return true;

			return false;
		}

		this.lineChartValid = function(labels,data_title,data_percent){
			return false;
		}

		this.areaChartValid = function(labels,data_title,data_percent){
			return false;
		}

		this.bubbleChartValid = function(labels,data_title,data_percent){
			if((data_title.length == 3) || (labels.length == 3))
				return true;
			return false;
		}

		this.comboChartValid = function(labels,data_title,data_percent){
			return false;
		}

		this.parseToLineData = function(labels,data,data_title,data_percent){

		}

		this.parseToAreaData = function(labels,data,data_title,data_percent){

		}

		this.parseToBubbleData = function(labels,data,data_title,data_percent){
			var chart_data = [];
			var temp = {};
			temp['key'] = "Key";
			temp['values'] = [];
			if(data_title.length == 3){
				for (var i = 0; i < labels.length; i++) {
					temp['values'].push(
						{
							shape 	: randomGroup(),
							size 	: data[0][i],
							x 	 	: data[1][i],
							y		: data[2][i],
						}
					);				
				}

				chart_data.push(temp);
				return chart_data;
			}else{

			}
		}

		this.parseToComboData = function(labels,data,data_title,data_percent){

		}

		this.parseToPieData = function(labels,datas,data_title,data_percent){
			var chart_data = [];
			for (var i = 0; i < labels.length; i++) {
				chart_data.push(
					{
						label : labels[i],
						value : numeral(datas[0][i]).value()*100
					}
				);
			}
			return chart_data;
		}

		this.parseToVerticalBarData = function(labels,datas,data_title,data_percent){
			var chart_data = [];
			if(labels.length >= datas.length){
					chart_data = this.parseAllowCol(labels,datas,data_title);
			}else{
					chart_data = this.parseAllowRow(labels,datas,data_title);
			}
			return chart_data;
		}

		this.parseToHorizontalBarData = function(labels,datas,data_title,data_percent){
			var chart_data = [];
			if(labels.length >= datas.length){
					chart_data = this.parseAllowCol(labels,datas,data_title);
			}else{
					chart_data = this.parseAllowRow(labels,datas,data_title);
			}
			return chart_data;
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
					temp['y'] = numeral(datas[j][i]).value()*100;
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
					temp['y'] = numeral(datas[i][j]).value()*100;
					chart_item_data.push(temp);
				}
				chart_item['values'] = chart_item_data;
				chart_data.push(chart_item);
			}
			return chart_data;
		}

	});