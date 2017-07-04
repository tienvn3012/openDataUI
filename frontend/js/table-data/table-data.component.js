angular.module("tableData").
	component("tableData", {
		templateUrl : "/frontend/js/table-data/table-data.template.html",
		controller : ["tableService" , function table(tableService) {
			this.title = "Table";
			this.hide_table = function(){
				return this.hide == true ? false : true;
			}
		}]
	});