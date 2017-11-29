angular.module('app', ['ui.bootstrap']);
function SlideCtrl($scope) {
  //$scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'https://images-na.ssl-images-amazon.com/images/I/41wgPHOmJTL._SX366_BO1,204,203,200_.jpg'
    },
    {
      image: 'https://images-na.ssl-images-amazon.com/images/I/41wgPHOmJTL._SX366_BO1,204,203,200_.jpg'
    },
    {
      image: 'https://images-na.ssl-images-amazon.com/images/I/41wgPHOmJTL._SX366_BO1,204,203,200_.jpg'
    },
    {
      image: 'https://images-na.ssl-images-amazon.com/images/I/41wgPHOmJTL._SX366_BO1,204,203,200_.jpg'
    }
  ];
}