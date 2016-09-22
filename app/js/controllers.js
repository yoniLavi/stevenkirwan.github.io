var bandApp = angular.module('BandAppControllers', [])

bandApp.controller('HomeController', function($scope, $http) {
	$http.get("js/band.json").then(function (response) {
		$scope.siteContent = response.data;
	});
});

bandApp.controller('BandController', function($scope, $http) {
    $scope.title = "Band Members";

    $http.get("js/band.json").then(function (response) {
		$scope.siteContent = response.data;
	});
});

bandApp.controller('ContactController', function($scope) {
    $scope.title = "Contact";
});

bandApp.controller('MusicController', function($scope) {
    $scope.title = "Music";
});

bandApp.controller('GigController', function($scope) {
    $scope.title = "Gigs";
});