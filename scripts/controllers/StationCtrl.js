app.factory('wikiService', function($http) {
      
    var wikiService = {
        get: function(station) {
            return $http.jsonp(
                'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&exsentences=5&redirects&explaintext=&titles=' + station.name + '&callback=JSON_CALLBACK');
        }
    };
    
    return wikiService;
});
    
app.controller('StationCtrl', ['$scope', '$filter', 'wikiService', function($scope, $filter, wikiService) {

    let toTitleCase = function (str) {
        return str.replace(/\w\S*/g, function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    let loadMainContent = function () {
        let targetPath = null;
        try {
            let params = new URLSearchParams(location.search.slice(1));
            targetPath = params.get('station');
        } catch(e) {
            targetPath = new RegExp('[\?&]station=([^&#]*)').exec(window.location.href)[1];
            console.log(targetPath)
        }
        $scope.target = $filter('filter')(stations, {'path':targetPath})[0];
        let normalizedTarget = encodeURIComponent(toTitleCase($scope.target.name).replace(/ /g , "_"));

        wikiService.get({name: normalizedTarget+'_tube_station'}).then(function(data) {
            var pageid = Object.keys(data.data.query.pages)[0];
            $scope.wikiData = data.data.query.pages[pageid].extract;
            if ($scope.wikiData == '') {
                wikiService.get({name: normalizedTarget+'_station'}).then(function(data) {
                    var pageid = Object.keys(data.data.query.pages)[0];
                    $scope.wikiData = data.data.query.pages[pageid].extract;
                    $scope.wikiLink = 'https://en.wikipedia.org/wiki/' + normalizedTarget + '_station';
                });
            } else {
                $scope.wikiLink = 'https://en.wikipedia.org/wiki/' + normalizedTarget + '_tube_station';
            }
        });

        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        var player;
        window.onYouTubeIframeAPIReady = function () {
            player = new YT.Player('player', {
                videoId: $scope.target.videoId,
                playerVars: {
                    autoplay: 1,
                    start: $scope.target.startSeconds,
                    showinfo: 0
                }
            });
        };
    }

    angular.element(document).ready(function () {
        angular.element(document.querySelector('.loading-prompt')).addClass('loaded');
        angular.element(document.querySelector('.heavy')).addClass('loaded');
    });

    loadMainContent();
      
}]);