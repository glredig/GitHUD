app.service('repoService', function($http, $q) {
	this.getRepos = function(org) {
		return $http.get('http://api.github.com/orgs/' + org + '/repos')
			.then(function(data) {
				return data;
			});
	}

	this.getCommits = function(org, repo) {
		return $http.get('http://api.github.com/repos/' + org + '/' + repo + '/commits')
			.then(function(data) {
				return data;
			});
	}
});