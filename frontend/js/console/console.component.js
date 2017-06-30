angular.module("console").
	component("console" , {
		transclude: true,
		bindings : {},
		
		templateUrl : "/frontend/js/console/console.template.html",
		controller : ["$routeParams","GetItem" , "drawService" , function console($routeParams,GetItem,drawService){
	
			this.title = "Console";
			this.current_tab = 1;
			
			this.change_tab = function(tab){
				this.current_tab = tab;
			}
			this.isActive = function(tab){
				return this.current_tab === tab;
			}

			this.items = [ //type : string-1 , date/time-2 , number-3
				{
					index : 0,
					type : 1,
					active : true,
					title : "col_1"

				},
				{
					index : 1,
					type : 1,
					active : false,
					title : "col_2"

				},
				{
					index : 2,
					type : 2,
					active : false,
					title : "col_3"

				},
				{
					index : 3,
					type : 3,
					active : true,
					title : "col_4"

				},
				{
					index : 4,
					type : 3,
					active : false,
					title : "col_5"

				},
				{
					index : 5,
					type : 3,
					active : false,
					title : "col_6"

				},
			];

			this.isActiveItem = function($index){
				return this.items[$index].active;
			}
			this.toggle_item = function($index){
				this.items[$index].active = this.items[$index].active ? false : true;
			}

			this.drawChart = function(){
				drawService.test();
			}

		}]
	});

	