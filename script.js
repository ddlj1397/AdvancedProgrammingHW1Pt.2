var map = L.map('map').setView([37.7, -122.4], 10);

  //stamen style layer
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

// load GeoJSON from an external file

$.getJSON("https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%201/Assignment%201/data/sf_crime.geojson",function(data){
                                                                 
    var ratIcon = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Saint_Louis_Billikens_logo.svg/1200px-Saint_Louis_Billikens_logo.svg.png',
    iconSize: [50,40]
  }); 
  L.geoJson(data  ,{
    pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: ratIcon});
    }
  }  ).addTo(map);
});                                           
