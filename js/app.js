var Contas = angular.module('Contas', [
'ui.mask',
'ngRoute',
'controllers',
'services'
]);

Contas.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/view.html'
	})

	.when('/pessoaFisica/', {
		templateUrl: 'views/pessoaFisica/read.html',
		controller: 'PessoaFisicaReadCtrl'
	})

	.when('/pessoaFisica/create', {
		templateUrl: 'views/pessoaFisica/create.html',
		controller: 'PessoaFisicaCreateCtrl'
	})

	.when('/pessoaFisica/edit/:id', {
		templateUrl: 'views/pessoaFisica/edit.html',
		controller: 'PessoaFisicaEditCtrl'
	})

	.when('/pessoaJuridica/', {
		templateUrl: 'views/pessoaJuridica/read.html',
		controller: 'PessoaJuridicaReadCtrl'
	})

	.when('/pessoaJuridica/create', {
		templateUrl: 'views/pessoaJuridica/create.html',
		controller: 'PessoaJuridicaCreateCtrl'
	})

	.when('/pessoaJuridica/edit/:id', {
		templateUrl: 'views/pessoaJuridica/edit.html',
		controller: 'PessoaJuridicaEditCtrl'
	})

	.when('/conta/', {
		templateUrl: 'views/conta/read.html',
		controller: 'ContaReadCtrl'
	})

	.when('/conta/create', {
		templateUrl: 'views/conta/create.html',
		controller: 'ContaCreateCtrl'
	})

	.when('/conta/edit/:id', {
		templateUrl: 'views/conta/edit.html',
		controller: 'ContaEditCtrl'
	})

	.when('/transacao/', {
		templateUrl: 'views/transacao/read.html',
		controller: 'TransacaoReadCtrl'
	})

	.when('/transacao/create', {
		templateUrl: 'views/transacao/create.html',
		controller: 'TransacaoCreateCtrl'
	})
});

Contas.value('api', 'https://hubfintech-api.herokuapp.com/');