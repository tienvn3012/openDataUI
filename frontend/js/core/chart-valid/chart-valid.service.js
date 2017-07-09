angular.module("core.chartValid").
	service("chartValid" , function () {
		var self = this;

		this.chartValid = [
			{
				name : function(labels,data_labels,datas){
					return self.verticalBarChartValid(labels,data_labels,datas);
				},
				data : function(labels,data_labels,datas){
					return self.parseToVerticalBarData(labels,data_labels,datas);
				},
				id : 0
			},
			{
				name : function(labels,data_labels,datas){
					return self.horizontalBarChartValid(labels,data_labels,datas);
				},
				data : function(labels,data_labels,datas){
					return self.parseToHorizontalBarData(labels,data_labels,datas);
				},
				id : 1
			},
			{
				name : function(labels,data_labels,datas){
					return self.pieChartValid(labels,data_labels,datas);
				},
				data : function(labels,data_labels,datas){
					return self.parseToPieData(labels,data_labels,datas);
				},
				id : 2
			},
			{
				name : function(labels,data_labels,datas){
					return self.lineChartValid(labels,data_labels,datas);
				},
				data : function(labels,data_labels,datas){
					return self.parseToLineData(labels,data_labels,datas);
				},
				id : 3
			},
			{
				name : function(labels,data_labels,datas){
					return self.areaChartValid(labels,data_labels,datas);
				},
				data : function(labels,data_labels,datas){
					return self.parseToAreaData(labels,data_labels,datas);
				},
				id : 4
			},
			{
				name : function(labels,data_labels,datas){
					return self.bubbleChartValid(labels,data_labels,datas);
				},
				data : function(labels,data_labels,datas){
					return self.parseToBubbleData(labels,data_labels,datas);
				},
				id : 5
			},
			{
				name : function(labels,data_labels,datas){
					return self.comboChartValid(labels,data_labels,datas);
				},
				data : function(labels,data_labels,datas){
					return self.parseToComboData(labels,data_labels,datas);
				},
				id : 6
			},
		];


		this.verticalBarChartValid = function(labels,data_labels,datas){
			return true;
		}

		this.horizontalBarChartValid = function(labels,data_labels,datas){
			return true;
		}

		this.pieChartValid = function(labels,data_labels,datas){
			// if(data_percent.length == 1)
			// 	if (data_percent[0])
			// 		return true;

			return false;
		}

		this.lineChartValid = function(labels,data_labels,datas){
			return false;
		}

		this.areaChartValid = function(labels,data_labels,datas){
			return false;
		}

		this.bubbleChartValid = function(labels,data_labels,datas){
			// if(data_title.length < 3 && labels.length < 3)
			// 	return false;
			// for (var i = 0; i < data_category.length; i++) {
			// 	if(data_category[i] && data_title >= 3)
			// 		return true;
			// }

			// if((data_title.length == 3) || (labels.length == 3))
			// 	return true;
			return false;
		}

		this.comboChartValid = function(labels,data_labels,datas){
			return false;
		}

		this.parseToLineData = function(labels,data_labels,datas){

		}

		this.parseToAreaData = function(labels,data_labels,datas){

		}

		this.parseToBubbleData = function(labels,data_labels,datas){
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

		this.parseToComboData = function(labels,data_labels,datas){

		}

		this.parseToPieData = function(labels,data_labels,datas){
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

		this.parseToVerticalBarData = function(labels,data_labels,datas){
			return self.parseToBarData(labels,data_labels,datas);
		}

		this.parseToHorizontalBarData = function(labels,data_labels,datas){
			return self.parseToBarData(labels,data_labels,datas);
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


		this.parseToBarData = function(labels,data_labels,datas){
			var chart_data = [];
			var chart = null;
			var data = [];
			var data_title = [];
			var index;
			var offset;

			for (var i = 0; i < datas.length; i++) {
				data.push(datas[i]['data']);
				data_title.push(datas[i]['title']);
			}

			
			for (var i = 0; i < datas.length; i+=3) {
				chart = null;
				index = i;
				i+3 > datas.length ? (offset = datas.length - i):offset = 3;

				if(labels['data'].length >= datas.length){
					chart = self.parseAllowCol(labels['data'],cutArray(data,index,offset),cutArray(data_title,index,offset));
			    }else{
					chart = self.parseAllowRow(labels['data'],cutArray(data,index,offset),cutArray(data_title,index,offset));
			    }

			    chart_data.push(chart);	
			}

			return chart_data;
		}


	});