app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.stations = stations;
    $scope.stationsToShow = 20;
    $scope.loadMore = function() {
        $scope.stationsToShow += 5;
    };
    $scope.onGridLoad = function () {
        angular.element(document.querySelector('.loading-prompt')).addClass('loaded');
        angular.element(document.querySelector('.heavy')).addClass('loaded');
    }
    $scope.randomStation = stations[Math.floor(Math.random()*stations.length)];
}]);