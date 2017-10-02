app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.videoModalVisible = false;

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;
    window.onYouTubeIframeAPIReady = function () {
        player = new YT.Player('player', {
            playerVars: {
                showinfo: 0
            }
        });
    };

    $scope.openVideoModal = function (station) {
        $scope.videoModalVisible = true;
        player.loadVideoByUrl(station.videoUrl, station.startSeconds);
    };

    $scope.closeVideoModal = function () {
        player.pauseVideo();
        $scope.videoModalVisible = false;
    };

    $scope.stations = [
        {
            id: "001",
            name: "Canary Wharf",
            path: "canary-wharf",
            videoUrl: "https://www.youtube.com/v/d_q50nCuMA8?version=3",
            startSeconds: 17,
            description: "",
            lines: ["jubilee"]
        },
        {
            id: "002",
            name: "Tottenham Court Road",
            path: "tottenham-court-road",
            videoUrl: "https://www.youtube.com/v/d_q50nCuMA8?version=3",
            startSeconds: 212,
            description: "",
            lines: ["central", "northern"]
        },
        {
            id: "003",
            name: "Pimlico",
            path: "pimlico",
            videoUrl: "https://www.youtube.com/v/eeEW0WfToJ8?version=3",
            startSeconds: 12,
            description: "",
            lines: ["victoria"]
        },
        {
            id: "004/005",
            name: "Edgware Road",
            path: "edgware-road",
            videoUrl: "https://www.youtube.com/v/eeEW0WfToJ8?version=3",
            startSeconds: 188,
            description: "",
            lines: ["circle", "district", "h&c", "bakerloo"]
        },
        {
            id: "006",
            name: "Euston Square",
            path: "euston-square",
            videoUrl: "https://www.youtube.com/v/skPxxwoCfXs?version=3",
            startSeconds: 12,
            description: "",
            lines: ["circle", "h&c", "metropolitan"]
        },
        {
            id: "007",
            name: "Arsenal",
            path: "arsenal",
            videoUrl: "https://www.youtube.com/v/skPxxwoCfXs?version=3",
            startSeconds: 204,
            description: "",
            lines: ["piccadilly"]
        },
        {
            id: "008",
            name: "Wood Lane",
            path: "wood-lane",
            videoUrl: "https://www.youtube.com/v/ui-MHqbIhIQ?version=3",
            startSeconds: 12,
            description: "",
            lines: ["circle", "h&c"]
        },
        {
            id: "009",
            name: "Oxford Circus",
            path: "oxford-circus",
            videoUrl: "https://www.youtube.com/v/ui-MHqbIhIQ?version=3",
            startSeconds: 240,
            description: "",
            lines: ["bakerloo", "central", "victoria"]
        },
        {
            id: "010",
            name: "Stratford",
            path: "stratford",
            videoUrl: "https://www.youtube.com/v/tZDuksoGI-c?version=3",
            startSeconds: 10,
            description: "",
            lines: ["central", "jubilee"]
        },
        {
            id: "011",
            name: "High Street Kensington",
            path: "high-street-kensington",
            videoUrl: "https://www.youtube.com/v/tZDuksoGI-c?version=3",
            startSeconds: 270,
            description: "",
            lines: ["circle", "district"]
        },
        {
            id: "012",
            name: "Ravenscourt Park",
            path: "ravenscourt-park",
            videoUrl: "https://www.youtube.com/v/o3Bt8Jso5z8?version=3",
            startSeconds: 14,
            description: "",
            lines: ["district"]
        },
        {
            id: "013",
            name: "Regent's Park",
            path: "regents-park",
            videoUrl: "https://www.youtube.com/v/o3Bt8Jso5z8?version=3",
            startSeconds: 210,
            description: "",
            lines: ["bakerloo"]
        },
        {
            id: "014",
            name: "Mornington Crescent",
            path: "mornington-crescent",
            videoUrl: "https://www.youtube.com/v/t9E9WBpECrU?version=3",
            startSeconds: 15,
            description: "",
            lines: ["northern"]
        },
        {
            id: "015",
            name: "Highbury & Islington",
            path: "highbury-islington",
            videoUrl: "https://www.youtube.com/v/t9E9WBpECrU?version=3",
            startSeconds: 219,
            description: "",
            lines: ["victoria"]
        },
        {
            id: "016",
            name: "North Acton",
            path: "north-acton",
            videoUrl: "https://www.youtube.com/v/ezYipMNvXmo?version=3",
            startSeconds: 19,
            description: "",
            lines: ["central"]
        },
        {
            id: "017",
            name: "Clapham North",
            path: "clapham-north",
            videoUrl: "https://www.youtube.com/v/ezYipMNvXmo?version=3",
            startSeconds: 250,
            description: "",
            lines: ["northern"]
        },
        {
            id: "018",
            name: "Warwick Avenue",
            path: "warwick-avenue",
            videoUrl: "https://www.youtube.com/v/7RLNltQ5aso?version=3",
            startSeconds: 10,
            description: "",
            lines: ["bakerloo"]
        },
        {
            id: "019",
            name: "Canning Town",
            path: "canning-town",
            videoUrl: "https://www.youtube.com/v/7RLNltQ5aso?version=3",
            startSeconds: 278,
            description: "",
            lines: ["jubilee"]
        },
        {
            id: "020",
            name: "Fulham Broadway",
            path: "fulham-broadway",
            videoUrl: "https://www.youtube.com/v/5d5Ml0o4a7Y?version=3",
            startSeconds: 10,
            description: "",
            lines: ["district"]
        },
        {
            id: "021",
            name: "Stockwell",
            path: "stockwell",
            videoUrl: "https://www.youtube.com/v/5d5Ml0o4a7Y?version=3",
            startSeconds: 218,
            description: "",
            lines: ["northern","victoria"]
        },
        {
            id: "022",
            name: "Russell Square",
            path: "russell-square",
            videoUrl: "https://www.youtube.com/v/9owc59mc1LI?version=3",
            startSeconds: 15,
            description: "",
            lines: ["piccadilly"]
        },
        {
            id: "023",
            name: "Turnham Green",
            path: "turnham-green",
            videoUrl: "https://www.youtube.com/v/9owc59mc1LI?version=3",
            startSeconds: 293,
            description: "",
            lines: ["district", "piccadilly"]
        },
        {
            id: "024",
            name: "Westminster",
            path: "westminster",
            videoUrl: "https://www.youtube.com/v/va2wUMRExoY?version=3",
            startSeconds: 10,
            description: "",
            lines: ["circle","district","jubilee"]
        },
        {
            id: "025",
            name: "Moorgate",
            path: "moorgate",
            videoUrl: "https://www.youtube.com/v/va2wUMRExoY?version=3",
            startSeconds: 302,
            description: "",
            lines: ["circle","h&c","metropolitan","northern"]
        },
    ];

}]);