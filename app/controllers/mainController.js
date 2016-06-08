app.controller('MainController',
	['$scope',
	'$http',

	function ($scope, $http) {

		$scope.figurines = [];

		$http.get(`http://10.0.0.200:5000/api/Inventory`)
		.success((err, inv) => {
			if (err) console.error(err);
			console.log('inv', inv);
		});
	}]
);