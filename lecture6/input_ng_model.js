(function() {
"use strict";

angular.module('NameCalculator', [])

.controller("NameCalculatorController", function($scope) {
	$scope.name="";
	$scope.totalValue= 0;
	
	$scope.displayNumeric = function () {
		var totalNameValue = calculateNumericForString($scope.name); //avoir le nombre de lettres
		$scope.totalValue = totalNameValue ; // la variable du scope est actualisée par la variable locale
	};
	
	function calculateNumericForString(string) {
		var totalStringValue = 0;
		for (var i=0; i<string.length; i++) {
			totalStringValue += string.charCodeAt(i);
		}
		
		return totalStringValue;
	}
	
});


})();