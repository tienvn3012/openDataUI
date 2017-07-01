angular.module("inputData").
	component("inputData" , {
		bindings : {},
		templateUrl : "/frontend/js/input-data/input-data.template.html",
		controller : ["$window","detectData" , function inputData($window,detectData) {
			this.submit = function(){
				allData = detectData.detect(this.input);
				$window.location.href = "/frontend/#/index";
			}
		}]
	});

// 	name,dob,age
// tien,30/12/1995,22
// hien,7/12/1995,22
// son,3/2/1995,28