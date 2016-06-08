'use strict';

let app = angular.module('NotDolls', ['ngRoute']);

app.config(['$routeProvider',
	$routeProvider => {
		$routeProvider.when('/', {
			templateUrl: 'partials/main.html',
			controller: 'MainController'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]);