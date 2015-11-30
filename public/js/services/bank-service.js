(function() {
	angular.module('LoanCalculator')
		.service('bankService', function($http) {

			this.getInterestRate = function() {
				return $http({
							method: 'GET',
							url: '/interest_rate'
						}).then(function(e) {
							return e.data.interest_rate;
						});
			};

		});

})();