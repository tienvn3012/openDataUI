
var allData = null;
var allChart=[];

var formats = [
    moment.ISO_8601,
    "MM/DD/YYYY HH:mm:ss",
    "DD/MM/YYYY HH:mm:ss",
    "DD/MM/YYYY",
    "DD/M/YYYY",
    "D/M/YYYY",
    "D/MM/YYYY",
    "MM/DD/YYYY",
    "YYYY/MM/DD"
];

var number_format = [
	"YYYY"
];

var x = [
	{
		key : "x1",
		values : [
			{
				x : 0,
				y : 100
			},
			{
				x : 1,
				y : 100
			},
			{
				x : 2,
				y : 100
			},

		]
	},
	{
		key : "x2",
		values : [
			{
				x : 0,
				y : 200
			},
			{
				x : 1,
				y : 200
			},
			{
				x : 2,
				y : 200
			},

		]
	},
	{
		key : "x3",
		values : [
			{
				x : 0,
				y : 300
			},
			{
				x : 1,
				y : 300
			},
			{
				x : 2,
				y : 300
			},

		]
	},
	{
		key : "x4",
		values : [
			{
				x : 0,
				y : 300
			},
			{
				x : 1,
				y : 300
			},
			{
				x : 2,
				y : 300
			},
		]
	},
];


function pie_chart(id,data){
	nv.addGraph(function() {
  	var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.values })
      .showLabels(true);


    d3.select(id)
        .datum(data)
        // .transition().duration(350)
        .call(chart);
    allChart.push(chart);
  	return chart;
	});
}


function bar_chart(id,data){
	nv.addGraph(function() {
    var chart = nv.models.multiBarChart()
      // .transitionDuration(300)
      .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
      .rotateLabels(0)      //Angle to rotate x-axis labels.
      .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
      .groupSpacing(0.1)    //Distance between each group of bars.
    ;

    // chart.xAxis
    //     .tickFormat(d3.format(',f'));

    // chart.yAxis
    //     .tickFormat(d3.format(',.1f'));

    d3.select(id)
        .datum(data)
        .call(chart);

    nv.utils.windowResize(chart.update);
    allChart.push(chart);
    return chart;
	});
}


function horizontal_bar_chart(id,data){
	 nv.addGraph(function() {
    var chart = nv.models.multiBarHorizontalChart()
        .x(function(d) { return d.x })
        .y(function(d) { return d.y })
        // .margin({top: 30, right: 20, bottom: 50, left: 175})
        .showValues(true)           //Show bar value next to each bar.
        // .tooltips(true)             //Show tooltips on hover.
        // .transitionDuration(350)
        .showControls(true);        //Allow user to switch between "Grouped" and "Stacked" mode.


    d3.select(id)
        .datum(data)
        .call(chart);

    nv.utils.windowResize(chart.update);
    allChart.push(chart);
    return chart;
  });
}

//line chart

var line_data = [ //data demo
  {
      key : "sample 1",
      // color : '#ff7f0e',
      values : [
        {
            x : 0,
            y : 10
        },
        {
            x : 1,
            y : 20
        },
        {
            x : 2,
            y : 40
        },
        {
            x : 3,
            y : 80
        },
        {
            x : 4,
            y : 160
        },
      ]
  },
  {
      key : "sample 5",
      // color : '#ff7f0e',
      values : [
        {
            x : 0,
            y : 30
        },
        {
            x : 1,
            y : 50
        },
        {
            x : 2,
            y : 70
        },
        {
            x : 3,
            y : 80
        },
        {
            x : 4,
            y : 100
        },
      ]
  },
  {
      key : "sample 2",
      // color : '#2ca02c',
      values : [
        {
            x : 0,
            y : 20
        },
        {
            x : 1,
            y : 50
        },
        {
            x : 2,
            y : 80
        },
        {
            x : 3,
            y : 100
        },
        {
            x : 4,
            y : 70
        },
      ]
  },
  {
      key : "sample 3",
      // color : '#7777ff',
      values : [
        {
            x : 0,
            y : 60
        },
        {
            x : 1,
            y : 10
        },
        {
            x : 2,
            y : 30
        },
        {
            x : 3,
            y : 70
        },
        {
            x : 4,
            y : 120
        },
      ]
  },
];

function line_chart(id,data){
	nv.addGraph(function() {
  var chart = nv.models.lineChart()
                .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
                .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
                // .transitionDuration(350)  //how fast do you want the lines to transition?
                .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
                .showYAxis(true)        //Show the y-axis
                .showXAxis(true)        //Show the x-axis
  ;

  // chart.xAxis     //Chart x-axis settings
  //     .axisLabel('Time');

  // chart.yAxis     //Chart y-axis settings
  //     .axisLabel('Voltage (v)')
  //     .tickFormat(d3.format('.02f'));

  /* Done setting the chart up? Time to render it!*/
  // var myData = sinAndCos();   //You need data...

  d3.select(id)    //Select the <svg> element you want to render the chart in.   
      .datum(data)         //Populate the <svg> element with chart data...
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(chart.update());
  allChart.push(chart);
  return chart;
});
}


//bubble chart 
var bubble_data = [
	{
		key : "Sample 1",
		values : [
			{
				shape : randomGroup(),
				size : randomSize(),
				x : randomPosition(),
				y : randomPosition()
			},
			{
				shape : randomGroup(),
				size : randomSize(),
				x : randomPosition(),
				y : randomPosition()
			},
			{
				shape : randomGroup(),
				size : randomSize(),
				x : randomPosition(),
				y : randomPosition()
			},
			{
				shape : randomGroup(),
				size : randomSize(),
				x : randomPosition(),
				y : randomPosition()
			},
			{
				shape : randomGroup(),
				size : randomSize(),
				x : randomPosition(),
				y : randomPosition()
			},
			{
				shape : randomGroup(),
				size : randomSize(),
				x : randomPosition(),
				y : randomPosition()
			},
			{
				shape : randomGroup(),
				size : randomSize(),
				x : randomPosition(),
				y : randomPosition()
			}
		]
	},
	{
		key : "Sample 3",
		values : [
			{
				shape : randomGroup(),
				size : randomSize(),
				x : randomPosition(),
				y : randomPosition()
			},
			{
				shape : randomGroup(),
				size : randomSize(),
				x : randomPosition(),
				y : randomPosition()
			},
			{
				shape : randomGroup(),
				size : randomSize(),
				x : randomPosition(),
				y : randomPosition()
			},
			{
				shape : randomGroup(),
				size : randomSize(),
				x : randomPosition(),
				y : randomPosition()
			},
			{
				shape : randomGroup(),
				size : randomSize(),
				x : randomPosition(),
				y : randomPosition()
			},
			{
				shape : randomGroup(),
				size : randomSize(),
				x : randomPosition(),
				y : randomPosition()
			},
			{
				shape : randomGroup(),
				size : randomSize(),
				x : randomPosition(),
				y : randomPosition()
			}
		]
	},
	{
		key : "Sample 2",
		values : [
			{
				shape : randomGroup(),
				size : randomSize(),
				x : randomPosition(),
				y : randomPosition()
			},
			{
				shape : randomGroup(),
				size : randomSize(),
				x : randomPosition(),
				y : randomPosition()
			},
			{
				shape : randomGroup(),
				size : randomSize(),
				x : randomPosition(),
				y : randomPosition()
			},
			{
				shape : randomGroup(),
				size : randomSize(),
				x : randomPosition(),
				y : randomPosition()
			},
			{
				shape : randomGroup(),
				size : randomSize(),
				x : randomPosition(),
				y : randomPosition()
			},
			{
				shape : randomGroup(),
				size : randomSize(),
				x : randomPosition(),
				y : randomPosition()
			},
			{
				shape : randomGroup(),
				size : randomSize(),
				x : randomPosition(),
				y : randomPosition()
			}
		]
	},
];


//Math.random random a number between 0 and 1
//Math.floor lam tron xuong so int gan nhat'

function randomGroup(){
	var shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'];
	return shapes[Math.floor((Math.random() * 10))];
}

function randomSize(){
	return Math.floor((Math.random() * 5)); 
}

function randomPosition(){
	return Math.floor((Math.random() * 100))
}

function bubble_chart(id,data){
	nv.addGraph(function() {
  var chart = nv.models.scatterChart()
                .showDistX(true)    //showDist, when true, will display those little distribution lines on the axis.
                .showDistY(true)
                // .transitionDuration(350)
                .color(d3.scale.category10().range());

  //Axis settings
  chart.xAxis.tickFormat(d3.format('.02f'));
  chart.yAxis.tickFormat(d3.format('.02f'));

  //We want to show shapes other than circles.
  // chart.scatter.onlyCircles(false);

  d3.select(id)
      .datum(data)
      .call(chart);

  nv.utils.windowResize(chart.update);
  allChart.push(chart);
  return chart;
});
}


function cutRow(data){ //cut each line of input
	var cut = [];
	var sub = "";
	for(var i=0;i<data.length;i++){
		if(data.charAt(i) != '\n'){
			sub+=data.charAt(i);
		}else{
			if(((i+1) <= data.length) && (data.charAt(i+1) == '\n')){
				continue;
			}else{
				cut.push(sub);
				sub = "";
			}
		}
	}
	cut.push(sub);
	return cut;
}

function cutData(data){ //cut each item in line by ","
	var char =[];
	
	for(var i=0;i<data.length;i++){
		char[i] = data[i].split(",");
	}
	return char;
}


function IsNumeric(input){
    var RE = /^-{0,1}\d*\.{0,1}\d+$/;
    return (RE.test(input));
}

function classify(char){ //classify data
	var cl = [];
	
	var labels = []; //detect line of labels -> headerRow
	for(var i=0;i<char.length;i++){
		var flag = true;
		for(var j=0;j<char[i].length;j++){
			if(IsNumeric(char[i][j])){
				flag = false;
				break;
			}
		}
		if(!flag){
			continue;
		}else{
			
			labels = char[i];
			for(var k=0;k<char[i].length;k++){
				var obj = {};
				obj["title"] = char[i][k];
				obj['data'] = [];
				obj['type'] = 0;
				cl.push(obj);
			}
			char.splice(i, 1); //cut this line from data array
			break;
		}
	}

	for(var x=0;x<char.length;x++){ //move data item to their column
		for(var y=0;y<char[x].length;y++){
			cl[y]['data'].push(char[x][y]);
		}
	}

	//need equal lenght in here first
	// cut in min lenght of all column
	cutMinData(cl,minLenghtData(cl));
	var label_flag = true;

	for(var i=0;i<cl.length;i++){ //need fix with empty data and number data in string column
		var f = true; 
		var fl;
		var valid = true;
		for(var j=0;j<cl[i]["data"].length;j++){
			if(cl[i]["data"][j] == null || cl[i]["data"][j] == ""){
				valid = false;
				break;
			}
			fl = IsNumeric(cl[i]["data"][j]);
			if(j === 0){
				continue;
			}else{
				if(fl != IsNumeric(cl[i]['data'][j-1])){
					f = false;
					// break;
				}
			}
		}
		if(valid){
			if(!f){ //type of some item different each other in this column
				cl[i]['type'] = 0;
			}else{
				if (fl) {
					if(isYearsData(cl[i]['data'])){
						cl[i]["type"] = 2;
						if(isCategory(cl[i]['data'])){
							cl[i]['category'] = true;
							cl[i]['label'] = false;
							continue;
						}else{
							cl[i]['category'] = false;
						}
						cl[i]['label'] = label_flag;
						if (label_flag) label_flag = false;
					}else{
						cl[i]["type"] = 3;
						if(isPercentCol(cl[i]['data'])){
							cl[i]['percent'] = true;
						}else{
							cl[i]['percent'] = false;
						}
					}
				}else{

					if(isDataDatetime(cl[i]['data'])){
						cl[i]["type"] = 2;
					}else{
						cl[i]["type"] = 1;
					}
					if(isCategory(cl[i]['data'])){
						cl[i]['category'] = true;
						cl[i]['label'] = false;
						continue;
					}else{
						cl[i]['category'] = false;
					}
					cl[i]['label'] = label_flag;
					if (label_flag) label_flag = false;
				}
			}
		}else{
			cl[i]['type'] = 4;
		}
	}


	return cl;
}


function isPercent(input){
	return input.search("\%") != -1 ? true : false;
}
function isPercentCol(data){
	var flag = true;
	for (var i = 0; i < data.length; i++) {
		if(!isPercent(data[i])){
			flag = false;
			break
		}
	}
	if(!flag){
		return false;
	}
	return true;
}

function isDatetime(str){
	return moment(str, formats, true).isValid();
}

function isYear(str){
	return moment(str,number_format,true).isValid();
}

function isDataDatetime(array_data){
	var flag = true;
	for (var i = 0; i < array_data.length; i++) {
		if(!isDatetime(array_data[i])){
			flag = false;
			break;
		}
	}
	if (flag) 
		return true;
	return false;
}

function isYearsData(array){
	var flag = true;
	for (var i = 0; i < array.length; i++) {
		if(isYear(array[i])){
			if(((i+1) < array.length) && (0<Math.abs(array[i] - array[i+1])<=10)){ //for 
				continue;
			}else if(i+1 == array.length){ //for the last item 
				continue;
			}
			flag = false;
			break;
		}else{
			flag = false;
			break;
		}
	}

	if (!flag) {
		return false;
	}
	return true;
}

function isCategory(data){
	var lis_count = [];
	for (var i = 0; i < data.length; i++) {
		var flag = false;
		for (var j = 0; j < lis_count.length; j++) {
			if (lis_count[j]['title'] === data[i]) {
				lis_count[j]['count']+=1;
				flag = true;
				break;
			}
		}
		if (!flag) {
			lis_count.push({
				title : data[i],
				count : 1
			});
		}
	}

	var t = 0;
	for (var i = 0; i < lis_count.length; i++) {
		if (lis_count[i]['count'] >= (data.length*0.3)) {
			return true;
		}
		if (lis_count[i]['count'] >= 2) t+=1;
	}

	if(t> lis_count.length*0.2)
		return true;
	return false;

}

function minLenghtData(data){ //min of all column
	var min = null;
	for (var i = 0; i < data.length; i++) {
	 	if(min == null){
	 		min = data[i]['data'].length;
	 	}else{
	 		if (min > data[i]['data'].length) {
	 			min = data[i]['data'].length;
	 		}
	 	}

	 }
	 return min;
}


function cutMinData(data,min){ // cut data to min lenght
	for (var i = 0; i < data.length; i++) {
		if(data[i]['data'].length > min){
			while((data[i]['data'].length - min) > 0){
				data[i]['data'].pop();
			}
		}
	}
}

function cutArray(array,index,offset){
	if(index < 0 || offset < 0)
		return [];
	if (array.length < index)
		return [];
	if ((offset > array.length) || (offset+index > array.length))
		return array;

	var cut = [];
	for (var i = 0; i < offset; i++) {
		cut.push(array[index]);
		index+=1;
	}
	return cut;
}

function cutArrayByIndexes(array,indexes){
	var cut = [];

	for (var i = 0; i < indexes.length; i++) {
		if(0 > indexes[i] || indexes[i] > array.length)
			continue;
		cut.push(array[indexes[i]]);
	}
}

function sloveTotalArray(array){
	var t = 0;
	for (var i = 0; i < array.length; i++) {
		t+=Math.abs(array[i]);
	}
	return t;
}

