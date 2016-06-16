'use strict';

let app = angular.module('NotDolls', ['ngRoute']);

app.config(['$routeProvider',
	$routeProvider => {
		$routeProvider.when('/', {
			templateUrl: 'partials/main.html',
			controller: 'MainController'
		})
		.when('/create', {
			templateUrl: 'partials/new-figurine.html',
			controller: 'NewFigurineController'
		})
		.when('/register', {
			templateUrl: 'partials/register.html',
			controller: 'RegisterController'
		})
		.otherwise({
			redirectTo: '/'
		});
	}
]);