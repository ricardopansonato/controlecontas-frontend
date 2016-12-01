var Contas = angular.module('controllers', []);

Contas.controller('PessoaFisicaReadCtrl', function($scope, pessoaFisica, $route){
	$scope.pessoaFisica = [];
	pessoaFisica.read().then(function(data){
		$scope.pessoaFisica = data.data._embedded.pessoaFisica;
		console.log(data);
	},function(data){
		console.log("data", data);
	});

	$scope.deletar = function(id){
		pessoaFisica.delete(id).then(function(data){
			console.log(data);
			$route.reload();
		});	
	}
});	

Contas.controller('PessoaFisicaCreateCtrl', function($scope, pessoaFisica, $location){
	$scope.cadastrar = function(item){
		pessoaFisica.create(item).then(function(data){
			$location.path('/pessoaFisica/');
		});
	}
});	

Contas.controller('PessoaFisicaEditCtrl', function($scope, pessoaFisica, $routeParams, $location){
	var id = $routeParams.id;
	pessoaFisica.profile(id).then(function(data){
		$scope.item = data.data;
	})

	$scope.atualizar = function(item){
		console.log(item);
		pessoaFisica.update(item, item.id).then(function(data){
			$location.path('/pessoaFisica/');
		});
	}
});	

Contas.controller('PessoaJuridicaReadCtrl', function($scope, pessoaJuridica, $route){
	$scope.pessoaJuridica = [];
	pessoaJuridica.read().then(function(data){
		$scope.pessoaJuridica = data.data._embedded.pessoaJuridica;
		console.log(data);
	},function(data){
		console.log("data", data);
	});

	$scope.deletar = function(id){
		pessoaJuridica.delete(id).then(function(data){
			console.log(data);
			$route.reload();
		});	
	}
});	

Contas.controller('PessoaJuridicaCreateCtrl', function($scope, pessoaJuridica, $location){
	$scope.cadastrar = function(item){
		pessoaJuridica.create(item).then(function(data){
			$location.path('/pessoaJuridica/');
		});
	}
});	

Contas.controller('PessoaJuridicaEditCtrl', function($scope, pessoaJuridica, $routeParams, $location){
	var id = $routeParams.id;
	pessoaJuridica.profile(id).then(function(data){
		$scope.item = data.data;
	})

	$scope.atualizar = function(item){
		console.log(item);
		pessoaJuridica.update(item, item.id).then(function(data){
			$location.path('/pessoaJuridica/');
		});
	}
});	

Contas.controller('ContaReadCtrl', function($scope, conta, $route){
	$scope.conta = [];
	conta.read().then(function(data){
		$scope.conta = data.data._embedded.conta;
		console.log(data);
	},function(data){
		console.log("data", data);
	});

	$scope.deletar = function(id){
		conta.delete(id).then(function(data){
			console.log(data);
			$route.reload();
		});	
	}
});	

Contas.controller('ContaCreateCtrl', function($scope, pessoaFisica, pessoaJuridica, conta, $location){
  	$scope.pessoas = [];
	pessoaFisica.read().then(function(data){
		for (i in data.data._embedded.pessoaFisica) {
			console.log(data.data._embedded.pessoaFisica[i]);
			$scope.pessoas.push(data.data._embedded.pessoaFisica[i]);
		}
	},function(data){
		console.log("data", data);
	});
	
	pessoaJuridica.read().then(function(data){
		for (i in data.data._embedded.pessoaJuridica) {
			console.log(data.data._embedded.pessoaJuridica[i]);
			$scope.pessoas.push(data.data._embedded.pessoaJuridica[i]);
		}
	},function(data){
		console.log("data", data);
	});

	$scope.contasFilhasSelect = null;
	$scope.contasPai = null;
	conta.read().then(function(data){
		$scope.contasFilhasSelect = data.data._embedded.conta;
		$scope.contasPai = data.data._embedded.conta;
		console.log(data);
	},function(data){
		console.log("data", data);
	});

	$scope.cadastrar = function(item){
		conta.create(item).then(function(data){
			$location.path('/conta/');
		});
	}
});	

Contas.controller('ContaEditCtrl', function($scope, conta, pessoaFisica, pessoaJuridica, $routeParams, $location){
	var id = $routeParams.id;
	conta.profile(id).then(function(data){
		$scope.item = data.data;
		$scope.contasFilhas = $scope.item.contasFilhas;
		$scope.contaPai = $scope.item.contaPai;
		$scope.pessoas = [];
		pessoaFisica.read().then(function(data){
			for (i in data.data._embedded.pessoaFisica) {
				console.log(data.data._embedded.pessoaFisica[i]);
				$scope.pessoas.push(data.data._embedded.pessoaFisica[i]);
				if ($scope.item.pessoa.id === data.data._embedded.pessoaFisica[i].id) {
					$scope.item.pessoa = data.data._embedded.pessoaFisica[i];
				}
			}
		},function(data){
			console.log("data", data);
		});
		pessoaJuridica.read().then(function(data){
			for (i in data.data._embedded.pessoaJuridica) {
				console.log(data.data._embedded.pessoaJuridica[i]);
				$scope.pessoas.push(data.data._embedded.pessoaJuridica[i]);
				if ($scope.item.pessoa.id === data.data._embedded.pessoaJuridica[i].id) {
					$scope.item.pessoa = data.data._embedded.pessoaJuridica[i];
				}
			}
		},function(data){
			console.log("data", data);
		});

		console.log($scope.pessoa);
	});

	$scope.contasFilhasSelect = null;
	$scope.contasPai = null;
	conta.read().then(function(data){
		$scope.contasFilhasSelect = data.data._embedded.conta;
		$scope.contasPai = data.data._embedded.conta;
		console.log(data);
	},function(data){
		console.log("data", data);
	});

	$scope.atualizar = function(item){
		console.log(item);
		conta.update(item, item.id).then(function(data){
			$location.path('/conta/');
		});
	}
});	