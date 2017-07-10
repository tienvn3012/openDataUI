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
			return true;
		}

		this.lineChartValid = function(labels,data_labels,datas){
			if(labels['type'] == 2)
				return true;
			for (var i = 0; i < data_labels.length; i++) {
				if(data_labels[i]['type'] == 2)
					return true;
			}
			return false;
		}

		this.areaChartValid = function(labels,data_labels,datas){
			return false;
		}

		this.bubbleChartValid = function(labels,data_labels,datas){
			return false;
			if(datas.length > 2)
				return true;
			return false;
		}

		this.comboChartValid = function(labels,data_labels,datas){
			return false;
		}

		this.parseToLineData = function(labels,data_labels,datas){
			var chart_data = [];
			var chart = [];
			if (labels['type'] == 2) {
				chart = [];
				for (var i = 0; i < datas.length; i++) {
					var temp = {}
					temp['key'] = datas[i]['title'];
					temp['values'] = [];
					for (var j = 0; j < labels['data'].length; j++) {
						temp['values'].push({
							x : labels['data'][j],
							y : datas[i]['data'][j]
						});
					}
					chart.push(temp);
				}
				chart_data.push(chart);
			}

			for (var k = 0; k < data_labels.length; k++) {
				if(data_labels[k]['type'] == 2){
					chart = [];
					for (var i = 0; i < datas.length; i++) {
						var temp = {}
						temp['key'] = datas[i]['title'];
						temp['values'] = [];
						for (var j = 0; j < data_labels[k]['data'].length; j++) {
							temp['values'].push({
								x : data_labels[k]['data'][j],
								y : datas[i]['data'][j]
							});
						}
						chart.push(temp);
					}
					chart_data.push(chart);
				}
			}

			return chart_data;
		}

		this.parseToAreaData = function(labels,data_labels,datas){

		}

		this.parseToBubbleData = function(labels,data_labels,datas){
			var chart_data = [];
			var chart = [];
			var category = [];
			var index=0;
			var offset=0;

			for (var i = 0; i < data_labels.length; i++) {
				if(data_labels[i]['category']){
					category.push(data_labels[i]);
				}
			}

			for (var i = 0; i < datas.length; i+=3) {
				chart = [];
				index = i;
				i+3 > datas.length ? (index = 2*i - datas.length - 2):offset = 3;

				var temp = {};
				temp['values'] = [];
				temp['key'] = labels['title'];
				for (var j = 0; j < labels['data'].length; j++) {
					
					temp['values'].push({
						shape 	: 'circle',
						size 	: datas[index]['data'][j],
						x 	 	: datas[index+1]['data'][j],
						y		: datas[index+2]['data'][j],
					});
				}
				chart.push(temp);

			    chart_data.push(chart);	
			}

			for (var k = 0; k < datas.length; k+=3) {
				chart = [];
				index = k;
				k+3 > datas.length ? (index = 2*k - datas.length - 2):offset = 3;

				for (var i = 0; i < category.length; i++) {
					for (var j = 0; j < category[i]['data'].length; j++) {
						var values = {
							shape 	: 'circle',
							size 	: datas[index]['data'][j],
							x 	 	: datas[index+1]['data'][j],
							y		: datas[index+2]['data'][j],
						};
						chart = self.categoryClassify(chart,category[i]['data'][j],values);
					}
				}

				chart_data.push(chart);

			}

			

			return chart_data;
		}

		

		this.parseToComboData = function(labels,data_labels,datas){

		}

		this.parseToPieData = function(labels,data_labels,datas){
			var chart_data = [];
			var chart = [];

			for (var i = 0; i < datas.length; i++) {
				var s = sloveTotalArray(datas[i]['data']);
				chart = [];
				for (var j = 0; j < labels['data'].length; j++) {
					chart.push({
						label  : labels['data'][j],
						values : (numeral((datas[i]['data'])[j]).value()*100)/s
					});
				}
				chart_data.push(chart);
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

			for (var i = 0; i < data_labels.length; i++) {
				for (var j = 0; j < datas.length; j+=3) {
					chart = null;
					index = j;
					j+3 > datas.length ? (offset = datas.length - j):offset = 3;

				if(data_labels[i]['data'].length >= datas.length){
					chart = self.parseAllowCol(data_labels[i]['data'],cutArray(data,index,offset),cutArray(data_title,index,offset));
			    }else{
					chart = self.parseAllowRow(data_labels[i]['data'],cutArray(data,index,offset),cutArray(data_title,index,offset));
			    }

			    chart_data.push(chart);	
				}
			}

			return chart_data;
		}

		this.categoryClassify = function(array,key,values){
			var flag = true;
			for (var i = 0; i < array.length; i++) {
				if(array[i]['key'] == key){
					flag = false;
					array[i]['values'].push(values);
					break;
				}
			}
			if(flag){
				var temp = {};
				temp['key'] = key;
				temp['values'] = [];
				temp['values'].push(values);
				array.push(temp);
			}
			return array;
		}

	});