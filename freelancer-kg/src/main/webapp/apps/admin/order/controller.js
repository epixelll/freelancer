'use strict';

/* Controllers */
// DOCTOR controllers

app.controller('OrderListCtrl', [ '$scope', 'Utils', function($scope, Utils) {

	$scope.tableParams = Utils.standardNgTableInit("order");

} ]);
