laminasApp.controller('mainCtrl', ['$scope', 'dataFactory', '$timeout', function($scope, dataFactory, $timeout){
	
	dataFactory.getAll.query().$promise.then(function(data){
		$scope.laminas= data

		$scope.totalItems = 60//$scope.laminas.length;
		$scope.currentPage = 1;
		$scope.maxSize = 10;
		$scope.pageSize = 10;

		$scope.setPage = function (pageNo) {
			$scope.currentPage = pageNo;
		};		
	});

	$scope.addUnamas = function(id, laTengo, repetidas){
		var cuantas = repetidas+1
		if(!laTengo)
			laTengo = true;
		dataFactory.updateOne.updateIt({"id":id, "laTengo": laTengo, "cuantas": cuantas }).$promise.then(function(data){
			$scope.laminas= data
		});
	}
	$scope.remUna = function(id, laTengo, repetidas){
		if(repetidas>0){
			var cuantas = repetidas-1
			dataFactory.updateOne.updateIt({"id":id, "laTengo": laTengo, "cuantas": cuantas }).$promise.then(function(data){
				$scope.laminas= data
			});
		}
	}
	/*	$scope.createTodas = function(){
			for(i=0;i<640;i++){
				dataFactory.createLaminas.createEm({"numero":i, "laTengo": false, "cuantas": 0 }).$promise.then(function(data){
						$scope.laminas= data
				})
			}
		}*/
	$scope.laTengo = function (id, laTengo, repetidas){
		if(!repetidas)
		dataFactory.updateOne.updateIt({"id":id, "laTengo": !laTengo, "cuantas": repetidas }).$promise.then(function(data){
			$scope.laminas= data
		});
	}
}]);	