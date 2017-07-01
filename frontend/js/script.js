
var allData = null;

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
]

var formats = [
    moment.ISO_8601,
    "MM/DD/YYYY HH:mm:ss",
    "DD/MM/YYYY HH:mm:ss",
    "DD/MM/YYYY",
    "DD/M/YYYY",
    "D/M/YYYY",
    "D/MM/YYYY",
    "MM/DD/YYYY",
    "YYYY/MM/DD",
    "YYYY"
];



function bar_chart(data){
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

    d3.select('#chart svg')
        .datum(data)
        .call(chart);

    nv.utils.windowResize(chart.update);

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

function line_chart(){
	nv.addGraph(function() {
  var chart = nv.models.lineChart()
                .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
                .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
                // .transitionDuration(350)  //how fast do you want the lines to transition?
                .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
                .showYAxis(true)        //Show the y-axis
                .showXAxis(true)        //Show the x-axis
  ;

  chart.xAxis     //Chart x-axis settings
      .axisLabel('Time (ms)')
      .tickFormat(d3.format(',r'));

  chart.yAxis     //Chart y-axis settings
      .axisLabel('Voltage (v)')
      .tickFormat(d3.format('.02f'));

  /* Done setting the chart up? Time to render it!*/
  // var myData = sinAndCos();   //You need data...

  d3.select('#chart svg')    //Select the <svg> element you want to render the chart in.   
      .datum(line_data)         //Populate the <svg> element with chart data...
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
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

function bubble_chart(){
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

  d3.select('#chart svg')
      .datum(bubble_data)
      .call(chart);

  nv.utils.windowResize(chart.update);

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
	
	var labels = []; //detect line of labels
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
				obj["label"] = char[i][k];
				obj['data'] = [];
				obj['type'] = 0;
				cl.push(obj);
			}
			char.splice(i, 1); //cut this line from data array
			break;
		}
	}

	for(var x=0;x<char.length;x++){ 
		for(var y=0;y<char[x].length;y++){
			cl[y]['data'].push(char[x][y]);
		}
	}

	for(var i=0;i<cl.length;i++){
		var f = true;
		var fl;
		for(var j=0;j<cl[i]["data"].length;j++){
			fl = IsNumeric(cl[i]["data"][j]);
			if(j === 0){
				continue;
			}else{
				if(fl != IsNumeric(cl[i]['data'][j-1])){
					f = false;
					break;
				}
			}
		}
		if(!f){
			cl[i]['type'] = 0;
		}else{
			if (fl) {
				cl[i]["type"] = 3;
			}else{
				if(isDataDatetime(cl[i]['data'])){
					cl[i]["type"] = 2;
				}else{
					cl[i]["type"] = 1;
				}
			}
		}
	}

	return cl;
}

function isDatetime(str){
	return moment(str, formats, true).isValid();
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
