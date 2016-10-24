projectsApp.controller("HeaderController", ['$scope', 'scrollToElement', function($scope, scrollToElement)
{
	$scope.scrollToElement = scrollToElement.scrollToElement;
	/*
	$scope.scrollToElement = function()
	{
		alert("hi");
	};
	*/
}]);