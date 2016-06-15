angular.module('App', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
    })
    .state('books', {
      url: '/books',
      templateUrl: 'books/books.html',
      controller: 'BooksCtrl'
    })
    .state('me', {
      url: '/me',
      templateUrl: 'me/me.html',
      controller:'MeCtrl'
    });

  $urlRouterProvider.otherwise('/home');
});
