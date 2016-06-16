'use strict';

app.controller('RegisterController', [
	'$http',
	'$scope',
	'AuthFactory',
	function ($http, $scope, authFactory) {

		$scope.githubOauth = function () {
			OAuth.initialize('KVn0BpSIK6C7BOwBVa8pVgmX5fE')
			OAuth.popup('github').done(function(result) {
			    console.log(result)
			    result.me().done(data => {
		    	console.log(data);
			    $http({
			    	url: 'http://localhost:5000/api/Geek',
			    	method: 'POST',
			    	data: JSON.stringify({
			    		username: data.alias,
			    		location: data.location,
			    		emailAddress: data.emailAddress,
			    		createdDate: new Date()
			    	})
			    })
			    .then(
			    	response => authFactory.setUser(response.data[0]),
			    	response => {
			    		if (response.status === 409) {
			    			$http.get(`http://localhost:5000/api/Geek?username=${data.alias}`)
			    			.then(
			    				res => {
			    					let theGeek = res.data[0];
			    					console.log('found the geek', theGeek);
			    					authFactory.setUser(theGeek);
			    				},
			    				res => {
			    					console.log('could not find that person', res);
			    				}
			    			)
			    		}
			    	}
			    )
			});
		});
	}
}]);