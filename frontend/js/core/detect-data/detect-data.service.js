angular.module("core.detectData").
	service("detectData" , function(){
		this.detect = function(data){
			var rows = cutRow(data);
			var items = cutData(rows);
			return classify(items);
		}
	});