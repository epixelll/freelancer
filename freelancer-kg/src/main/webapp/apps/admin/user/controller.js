'use strict';

/* Controllers */
// ADMIN controllers
app.controller('UserListCtrl', [ '$scope', 'Utils', function($scope, Utils) {

	$scope.tableParams = Utils.standardNgTableInit("user");

} ]);

app.controller('UserAddCtrl', [ '$scope', '$state', 'restService', function($scope, $state, restService) {

	$scope.user = {};

	restService.all("staff").customPOST({startIndex : 0, resultQuantity : 1000}, "list").then(function(data) {
		$scope.staffs = data.originalElement.resultList;
	});
	restService.all("role").customPOST({startIndex : 0, resultQuantity : 1000}, "list").then(function(data) {
		$scope.roles = data.originalElement.resultList;
	});

	$scope.create = function() {
		if ($scope.passwordRepeat != $scope.user.password) {
			alert("Пароли не совподает");
			return;
		}
		restService.one("user").customPOST($scope.user, "create").then(function(data) {
			alert("Успешно создано!");
			$state.go('admin.user.list')
		});
	};

} ])

app.controller('UserEditCtrl', [ '$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {

	$scope.userId = $stateParams.id;

	restService.all("user").customGET($scope.userId).then(function(data) {
		$scope.user = data.originalElement;
	});
	restService.all("staff").customPOST({startIndex : 0, resultQuantity : 1000}, "list").then(function(data) {
		$scope.staffs = data.originalElement.resultList;
	});
	restService.all("role").customPOST({startIndex : 0, resultQuantity : 1000}, "list").then(function(data) {
		$scope.roles = data.originalElement.resultList;
	});
	$scope.update = function() {
		restService.one("user").customPOST($scope.user, "update/" + $scope.userId).then(function(data) {
			alert("Успешно обновлено!");
			$state.go("admin.user.list");
		});
	}
} ]);
