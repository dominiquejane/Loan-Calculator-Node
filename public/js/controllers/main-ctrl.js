(function() {
	angular.module('LoanCalculator')
		.controller('MainCtrl', function($scope, bankService) {

			$scope.getInterestRate = function() {
				bankService.getInterestRate()
					.then(function(e) {
						$scope.interest_rate = e;
						return $scope.interest_rate;
					});
			};

			$scope.getInterestRate();

			$scope.calculatePayment = function() {
				$scope.rate = $scope.interest_rate / 100;
				$scope.total = Number($scope.principal) + ($scope.principal * $scope.rate * 4);
				$scope.monthly_payment = ($scope.total / 48).toFixed(2);
			};
		});
})();