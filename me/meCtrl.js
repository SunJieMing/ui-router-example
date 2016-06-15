angular.module('App')
.controller('MeCtrl', function($scope) {
  $scope.personalInfo = {
    name: 'Ben',
    work: 'DevMountain Instructor',
    favoriteFoods: [
      'Mango',
      'Steak',
      'Authentic Mexican Food'
    ],
    married: true,
    age: 24
  };
});
