app.controller('NewFigurineController', [
	'$scope', 
	'$http', 
	'AuthFactory',
	function ($scope, $http, authFactory) {
		$scope.figurine = {};

		$scope.createFigurine = function () {
			$scope.GeekId = authFactory.getUser().GeekId;
			$scope.DateCreated = new Date();
			$http({
				url: 'http://localhost:5000/api/Inventory',
				method: 'POST',
				data: JSON.stringify($scope.figurine)
			}).success(inv => console.log('The figurine was created!'))
		}
	}
])