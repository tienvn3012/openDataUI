angular.module("dashboard").
	component("dashboard" , {
		templateUrl : "/frontend/js/dashboard/main-dashboard/dashboard.template.html",
		controller : [ "dashboardService" , "drawService" , function dashboard(dashboardService,drawService) {
			this.gridsterOpts = {
            	minRows: 1,
            	maxRows: 100,
            	// columns: 6, 
            	// colWidth: 'auto', 
            	// rowHeight: 'match', 
            	margins: [10, 10], 
            	defaultSizeX: 2, 
            	defaultSizeY: 2, 
            	// mobileBreakPoint: 600, // if the screen is not wider that this, remove the grid layout and stack the items
            	resizable: {
            	    enabled: true,
            	    start: function (event, uiWidget, $element) {
            	    }, // optional callback fired when resize is started,
           		    resize: function (event, uiWidget, $element) {
           	    	}, // optional callback fired when item is resized,
            	    stop: function (event, uiWidget, $element) {
            	    } // optional callback fired when item is finished resizing
            	},
            	draggable: {
            	    enabled: true, // whether dragging items is supported
            	    handle: '.title', // optional selector for resize handle
            	    start: function (event, uiWidget, $element) {
             	   }, // optional callback fired when drag is started,
             	   drag: function (event, uiWidget, $element) {
             	   }, // optional callback fired when item is moved,
             	   stop: function (event, uiWidget, $element) {
             	   } // optional callback fired when item is finished dragging
            	}
        	};


        	this.dashboardItems = [
        		// {
        		// 	title : "Vertical Bar Chart",
        		// 	id : "chart1"
        		// },
        		// {
        		// 	title : "Horizontal Bar Chart",
        		// 	content : "content"
        		// },
        		// {
        		// 	title : "Pie Chart",
        		// 	content : "content"
        		// },
        		// {
        		// 	title : "Bubble Chart",
        		// 	content : "content"
        		// }
        	];


            this.items = dashboardService.renderItems(allData);
            var  obj   = dashboardService.parseToChartData(this.items);

            for (var i = 0; i < obj['chart'].length; i++) {
                this.dashboardItems.push({
                    title : dashboardService.classifyChartId(obj['chart'][i]),
                    id    : "chart"+obj['chart'][i]
                });
            }

            
            drawService.drawAll(obj['chart'],obj['data']);
		}]
	});