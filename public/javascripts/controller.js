laminasApp.controller('mainCtrl', ['$scope', 'dataFactory', '$timeout', function($scope, dataFactory, $timeout){

	dataFactory.traerTodas.query().$promise.then(function(data){
		$scope.laminas= data

		// Paginador http://angular-ui.github.io/bootstrap/#/pagination
		$scope.totalItems = data.length;
		$scope.maxSize = 10;
		$scope.currentPage = 1;
		$scope.pageSize = 10;

		$scope.setPage = function (pageNo) {
			$scope.currentPage = pageNo;
		};
		// /Paginador
	});

	$scope.agregarUnamas = function(id, laTengo, repetidas, numero){
		var cuantas = repetidas+1
		if(!laTengo)
			laTengo = true;
		dataFactory.actualizarUna.actualizala({"id":id, "laTengo": laTengo, "cuantas": cuantas }).$promise.then(function(data){
			$scope.laminas[numero]= data[0];
		});
	}
	$scope.quitarUna = function(id, laTengo, repetidas, numero){
		if(repetidas>=1){
			var cuantas = repetidas-1
			dataFactory.actualizarUna.actualizala({"id":id, "laTengo": laTengo, "cuantas": cuantas }).$promise.then(function(data){
				$scope.laminas[numero]= data[0];
			});
		}
	}
	/*	$scope.crearTodas = function(){
			for(i=0;i<640;i++){
				dataFactory.crearLaminas.crealas({"numero":i, "laTengo": false, "cuantas": 0 }).$promise.then(function(data){
						$scope.laminas= data
				})
			}
		}*/
	$scope.laTengo = function (id, laTengo, repetidas, numero){
		if(!repetidas)
		dataFactory.actualizarUna.actualizala({"id":id, "laTengo": !laTengo, "cuantas": repetidas }).$promise.then(function(data){
			$scope.laminas[numero]= data[0];
		});
	}
}]);	