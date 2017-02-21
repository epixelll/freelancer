'use strict';

/* Services */

app.factory("Modals", function(restService, $modal, ngTableParams){
	return {
		callNewBrandModal: function(){
			var modalInstance = $modal.open({
			      templateUrl: '../common/view/new_brand_modal.html',
			      controller: 'NewBrandModalCtrl',
			      size: 'sm'
			    });

			    modalInstance.result.then(function (selectedItem) {
			    }, function () {
			      return;
			    });
		},
	}
});