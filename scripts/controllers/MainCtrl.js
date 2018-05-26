app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.stations = stations;
    angular.element(document).ready(function () {
        angular.element(document.querySelector('.loading-prompt')).addClass('loaded');
        angular.element(document.querySelector('.heavy')).addClass('loaded');
    });
    $scope.randomStation = stations[Math.floor(Math.random()*stations.length)];
}]);