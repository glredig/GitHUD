app.service('repoService', function($http, $q) {
	this.getRepos = function(org) {
		return $http.get('http://api.github.com/orgs/' + org + '/repos')
			.then(function(data) {
				return data;
			});
	}
});