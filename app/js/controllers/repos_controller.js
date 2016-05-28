app.controller('ReposController', function($scope, $q, repoService) {
	$scope.repos = [];
	$scope.commits = [];
	$scope.org = 'Netflix'

	repoService.getRepos($scope.org)
		.then(function(repos) {
			$scope.repos = repos.data;

			console.log('repos', $scope.repos);
		});

	function getCommits(repo) {
		repoService.getCommits($scope.org, repo) 
			.then(function(commits) {
				$scope.commits = commits.data;

				console.log($scope.commits);
			});
	}

	$scope.selectRepo = function(repo) {
		$scope.selected_repo = undefined;
		getCommits(repo.name);
		$scope.selected_repo = repo;
	}

	$scope.deselectRepo = function() {
		$scope.selected_repo = undefined;
	}
});