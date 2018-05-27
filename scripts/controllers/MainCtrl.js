app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.stations = stations.slice(0, 20);
    $scope.loadMore = function() {
        $scope.stations = stations.slice(0, $scope.stations.length + 5);
    };
    angular.element(document).ready(function () {
        angular.element(document.querySelector('.loading-prompt')).addClass('loaded');
        angular.element(document.querySelector('.heavy')).addClass('loaded');
    });
    $scope.randomStation = stations[Math.floor(Math.random()*stations.length)];
}]);