app.controller('ReposController', function($scope, $q, repoService) {
	$scope.repos = [];
	$scope.commits = [];
	$scope.org = 'Netflix';
	

	$scope.init = function() {
		getRepos($scope.org);
		$scope.org_edit = false;
		$scope.repo_filter = '-forks_count';
	}

	function getRepos(org) {
		repoService.getRepos(org)
			.then(function(repos) {
				$scope.repos = repos.data;

				// console.log('repos', $scope.repos);
			});	
	}

	function getCommits(repo) {
		repoService.getCommits($scope.org, repo) 
			.then(function(commits) {
				$scope.commits = commits.data;

				console.log('commits', $scope.commits);
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

	$scope.toggleEdit = function() {
		if ($scope.org_edit) {
			getRepos($scope.org);
		}

		$scope.org_edit = !$scope.org_edit;
	}

	$scope.updateFilter = function(filter) {
		if ($scope.repo_filter == filter) {
			if (filter.substring(0, 1) == '-') {
				$scope.repo_filter = filter.substring(0);
			}
			else {
				$scope.repo_filter = '-' + filter;
			}
		}
		else {
			$scope.repo_filter = filter;
		}
	}
});