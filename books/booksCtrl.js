angular.module('App')
.controller('BooksCtrl', function($scope) {
  $scope.favoriteBooks = [
    'Moby Dick',
    'LOTR',
    'Anything by Malcolm Gladwell'
  ];
});
