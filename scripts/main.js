//function filterStations() {
//    var input, stations, i, a, filter;
//    input = document.getElementById('station-filter');
//    filter = input.value.toUpperCase().trim();
//    stations = document.getElementsByClassName("station-container");
//    if (stations.length < 1) {
//      return;
//    }
//    for (i = 0; i < stations.length; i++) {
//        a = stations[i].id;
//        if (a.toUpperCase().replace(/-/g, ' ').indexOf(filter) > -1) {
//            stations[i].style.display = "";
//        } else {
//            stations[i].style.display = "none";
//        }
//    }
//}