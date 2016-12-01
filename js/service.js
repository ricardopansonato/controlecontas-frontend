var Contas = angular.module('services', []);

Contas.factory('pessoaFisica', function($http, api){
	return {
		read: function(){
			return $http.get(api + 'pessoaFisica');
		},
		create: function(item){
			return $http.post(api + 'pessoaFisica', item);
		},
		profile: function(id){
			return $http.get(api + 'pessoaFisica/' + id);	
		},
		update: function(item, id){
			return $http.put(api + 'pessoaFisica/' + id, item);	
		},
		delete: function(id){
			return $http.delete(api + 'pessoaFisica/' + id);
		}
	}
});

Contas.factory('pessoaJuridica', function($http, api){
	return {
		read: function(){
			return $http.get(api + 'pessoaJuridica');
		},
		create: function(item){
			return $http.post(api + 'pessoaJuridica', item);
		},
		profile: function(id){
			return $http.get(api + 'pessoaJuridica/' + id);	
		},
		update: function(item, id){
			return $http.put(api + 'pessoaJuridica/' + id, item);	
		},
		delete: function(id){
			return $http.delete(api + 'pessoaJuridica/' + id);
		}
	}
});

Contas.factory('conta', function($http, api){
	return {
		read: function(){
			return $http.get(api + 'conta');
		},
		create: function(item){
			return $http.post(api + 'conta', item);
		},
		profile: function(id){
			return $http.get(api + 'conta/' + id);	
		},
		update: function(item, id){
			return $http.put(api + 'conta/' + id, item);	
		},
		delete: function(id){
			return $http.delete(api + 'conta/' + id);
		}
	}
});