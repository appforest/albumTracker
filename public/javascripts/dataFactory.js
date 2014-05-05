laminasApp.factory('dataFactory', ['$resource', function($resource){
	return {
		traerTodas: $resource('/api/laminas'),
		actualizarUna: $resource('/api/laminas/:id/:laTengo/:cuantas', {}, {
			"actualizala": { method: "PUT", params: {id: '@id', laTengo: '@laTengo', cuantas: '@cuantas'}, isArray: true }
		}),
		crearLaminas: $resource('/api/laminas/:numero/:laTengo/:cuantas', {}, {
			"crealas": { method: "POST", params: {numero: '@numero', laTengo: '@laTengo', cuantas: '@cuantas'}, isArray: true }
		})
	}

}]);