


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
			{
				x : 3,
				y : 100
			}
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
			{
				x : 3,
				y : 200
			}
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
			{
				x : 3,
				y : 300
			}
		]
	},
]

var abc = {
	x : function(){
		alert("aaaa");
	}
};

function bar_chart(){
	nv.addGraph(function() {
    var chart = nv.models.multiBarChart()
      // .transitionDuration(300)
      .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
      .rotateLabels(0)      //Angle to rotate x-axis labels.
      .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
      .groupSpacing(0.1)    //Distance between each group of bars.
    ;

    chart.xAxis
        .tickFormat(d3.format(',f'));

    chart.yAxis
        .tickFormat(d3.format(',.1f'));

    d3.select('#chart svg')
        .datum(x)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
});
}
