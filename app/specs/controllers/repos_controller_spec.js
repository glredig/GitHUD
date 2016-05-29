describe('ReposController', function() {
	var $rootScope,
		$scope,
		controller;

	beforeEach(function() {
		module('app');

		inject(function($injector) {
			$rootScope = $injector.get('$rootScope');
			$scope = $rootScope.$new();
			controller = $injector.get('$controller')('ReposController', {$scope: $scope});
		});
	});

	describe('Actions', function() {
		describe('init', function() {
			it('should set config variables', function() {
				expect($scope.org_edit).toEqual(undefined);
				expect($scope.repos).toEqual([]);
				$scope.init();
				expect($scope.org_edit).toEqual(false);
				expect($scope.repo_filter).toEqual('-forks_count');
			});
		});

		describe('deselectRepo', function() {
			it('should unset the selected_repo', function() {
				$scope.selected_repo = 'test';
				$scope.deselectRepo();
				expect($scope.selected_repo).toEqual(undefined);
			});
		});

		describe('toggleEdit', function() {
			it('should toggle the org edit mode', function() {
				$scope.org_edit = false;
				$scope.toggleEdit();
				expect($scope.org_edit).toEqual(true);
			});
		})

		describe('updateFilter', function() {
			describe('passed the current filter', function() {
				it('should set the filter to the negative version', function() {
					$scope.repo_filter = 'test';
					$scope.updateFilter('test');
					expect($scope.repo_filter).toEqual('-test');
				});
			});

			describe('passed a different filter', function() {
				it('should set the filter to the passed string', function() {
					$scope.repo_filter = 'test';
					$scope.updateFilter('test2');
					expect($scope.repo_filter).toEqual('test2');

				});
			});
		})

	});
});