describe('repoService', function() {
	var repoService, httpBackend, base = 'base';

	beforeEach(module('app'));

	beforeEach(inject(function(_repoService_, $httpBackend) {
		repoService = _repoService_;
		httpBackend = $httpBackend;
	}));

	describe('getOrg', function() {
		it('should return a data object for the given organization', function() {
			httpBackend.whenGET('http://api.github.com/orgs/test_org').respond(
				{
					org: {
						description: 'This is a test'
					}
				});


			repoService.getOrg('test_org').then(function(org_obj) {
				expect(org_obj.data.org.description).toBe('This is a test');
			});
			httpBackend.flush();
		});
	});

	describe('getRepos', function() {
		it('should return an array of repo objects for the given organization', function() {
			httpBackend.whenGET('http://api.github.com/orgs/test_org/repos').respond(
				{
					repos: [
					{
						name: 'repo1',
					},
					{
						name: 'repo2',
					}
				]});


			repoService.getRepos('test_org').then(function(repos) {
				expect(repos.data.repos[0].name).toBe('repo1');
			});
			httpBackend.flush();
		});
	});

	describe('getCommits', function() {
		it('should return an array of commit objects for the given repo', function() {
			httpBackend.whenGET('http://api.github.com/repos/test_org/repo1/commits').respond(
				{
					commits: [
					{
						message: 'commit1',
					},
					{
						message: 'commit2',
					}
				]});


			repoService.getCommits('test_org', 'repo1').then(function(commits) {
				expect(commits.data.commits[0].message).toBe('commit1');
			});
			httpBackend.flush();
		});
	});
});