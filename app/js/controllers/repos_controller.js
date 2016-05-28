app.controller('ReposController', function($scope, $q, repoService) {
	$scope.repos = [];

	repoService.getRepos('netflix')
		.then(function(repos) {
			$scope.repos = repos.data;
		});
});