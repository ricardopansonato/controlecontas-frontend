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
		item.type = "PessoaFisica";
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
		item.type = "PessoaFisica";
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
		item.type = "PessoaJuridica";
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
		item.type = "PessoaJuridica";
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
			var item  = data.data._embedded.pessoaFisica[i];
			item.type = "PessoaFisica";
			$scope.pessoas.push(item);
		}
	},function(data){
		console.log("data", data);
	});

	pessoaJuridica.read().then(function(data){
		for (i in data.data._embedded.pessoaJuridica) {
			var item  = data.data._embedded.pessoaJuridica[i];
			item.type = "PessoaJuridica";
			$scope.pessoas.push(item);
		}
	},function(data){
		console.log("data", data);
	});

	$scope.contasPai = null;
	conta.read().then(function(data){
		$scope.contasFilhasSelect = data.data._embedded.conta;
		$scope.contasPai = data.data._embedded.conta;
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
			console.log(data);
			for (i in data.data._embedded.pessoaFisica) {
				var item  = data.data._embedded.pessoaFisica[i];
				item.type = "PessoaFisica";
				$scope.pessoas.push(item);
				if ($scope.item.pessoa != null && 
						$scope.item.pessoa.id === data.data._embedded.pessoaFisica[i].id) {
					$scope.item.pessoa = data.data._embedded.pessoaFisica[i];
				}
			}
		},function(data){
			console.log("data", data);
		});

		pessoaJuridica.read().then(function(data){
			console.log(data);
			for (i in data.data._embedded.pessoaJuridica) {
				var item  = data.data._embedded.pessoaJuridica[i];
				item.type = "PessoaJuridica";
				$scope.pessoas.push(item);
				if ($scope.item.pessoa != null && 
						$scope.item.pessoa.id === data.data._embedded.pessoaJuridica[i].id) {
					$scope.item.pessoa = data.data._embedded.pessoaJuridica[i];
				}
			}
		},function(data){
			console.log("data", data);
		});

		console.log($scope.pessoa);
	});

	$scope.contasPai = null;
	conta.read().then(function(data){
		$scope.contasPai = data.data._embedded.conta;
	},function(data){
		console.log("data", data);
	});

	$scope.atualizar = function(item){
		conta.update(item, item.id).then(function(data){
			$location.path('/conta/');
		});
	}
});	

Contas.controller('TransacaoReadCtrl', function($scope, conta, transacao, $route, $location){
	$scope.transacoes = null;
	transacao.read().then(function(data){
		$scope.transacoes = data.data._embedded.transacao;
		conta.read().then(function(data){
			$scope.contas = data.data._embedded.conta;
			for (var i in $scope.transacoes) {
				$scope.transacoes[i].contaOrigemObj = $scope.contas.filter(function(v) {
				    return v.id === $scope.transacoes[i].contaOrigem;
				})[0];

				$scope.transacoes[i].contaDestinoObj = $scope.contas.filter(function(v) {
				    return v.id === $scope.transacoes[i].contaDestino;
				})[0];
			}
		},function(data){
			console.log("data", data);
		});
	},function(data){
		console.log("data", data);
	});

	$scope.estornar = function(item){
		var contaOrigem = item.contaOrigem;
		console.log(item);
		
		if (item.contaOrigemObj.contaPai == null) {
			$location.path('/transacao/estornar/' + item.id);
		} else {
			delete item['id'];
			var contaOrigem = item.contaOrigem;
			item.contaOrigem = item.contaDestino;
			item.contaDestino = contaOrigem;
			transacao.create(item).then(function(data){
				$route.reload();
			});				
		}

	}
});	

Contas.controller('TransacaoCreateCtrl', function($scope, conta, transacao, $location){
	$scope.contas = null;
	conta.read().then(function(data){
		$scope.contas = data.data._embedded.conta;
	},function(data){
		console.log("data", data);
	});
	$scope.cadastrar = function(item){
		transacao.create(item).then(function(data){
			$location.path('/transacao/');
		});
	}
});	


Contas.controller('TransacaoEstornarCtrl', function($scope, $routeParams, transacao, $location){
	var id = $routeParams.id;
	$scope.transacao = null;
	transacao.profile(id).then(function(data){
		$scope.transacao = data.data;
	}, function(data) {
		console.log(data);
	});

	$scope.estornar = function(item){
		$scope.transacao.aporte = item.aporte;
		delete $scope.transacao['id'];
		var contaOrigem = $scope.transacao.contaOrigem;
		$scope.transacao.contaOrigem = $scope.transacao.contaDestino;
		$scope.transacao.contaDestino = contaOrigem;
		console.log($scope.transacao);
		transacao.create($scope.transacao).then(function(data){
			$location.path('/transacao/');
		});
	}
});	