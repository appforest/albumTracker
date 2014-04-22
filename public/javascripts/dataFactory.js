laminasApp.factory('dataFactory', ['$resource', function($resource){
	return {
		getAll: $resource('/api/laminas'),
		updateOne: $resource('/api/laminas/:id/:laTengo/:cuantas', {}, {
			"updateIt": { method: "PUT", params: {id: '@id', laTengo: '@laTengo', cuantas: '@cuantas'}, isArray: true }
		}),
		createLaminas: $resource('/api/laminas/:numero/:laTengo/:cuantas', {}, {
			"createEm": { method: "POST", params: {numero: '@numero', laTengo: '@laTengo', cuantas: '@cuantas'}, isArray: true }
		})
	}

}]);