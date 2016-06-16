app.controller('MainController',
	['$scope',
	'$http',

	function ($scope, $http) {

		$scope.figurines = [];

		$http.get(`http://localhost:5000/api/Inventory`)
		.success(inv => $scope.figurines = inv);
	}]
);