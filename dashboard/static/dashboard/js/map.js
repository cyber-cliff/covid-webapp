// See post: http://asmaloney.com/2015/06/code/clustering-markers-on-leaflet-maps

var map = L.map('map').setView([14.58745, 120.97763], 6)
// hospital data list
var hospitals = JSON.parse(document.getElementById('hospitals-data').textContent);
console.log(hospitals)

L.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=P16TLTOWO9JdjAuz1vre',{
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);



var markers = []


var markerClusters = L.markerClusterGroup();




function showHospital(me)
{
    // alert(me.id);
    // alert(me.checked)
    if(me.checked == true) {
      showMarker()
    }
    else{
      // markers = []
      markerClusters.clearLayers();

      map.removeLayer(markerClusters)
    }
   
    
}

function showMarker(){
  markers = [{"lat": 14.58745,"lng":120.97763}, {
    "lat": 14.57586,"lng":121.0853}, {
    "lat": 14.5440746,"lng":121.0652107}, {
    "lat": 14.67804,"lng":120.98048}, {
    "lat": 14.619226,"lng":121.1512881}, {
    "lat": 14.56288,"lng":121.00123}, {
    "lat": 14.41001,"lng":121.03714}, {
    "lat": 14.4277681,"lng":121.024484}, {
    "lat": 14.4134885,"lng":121.0436189}, {
    "lat": 14.44832,"lng":120.98563}, {
    "lat": 14.70058,"lng":121.03501}, {
    "lat": 14.62465,"lng":121.10285}, {
    "lat": 14.5310098,"lng":121.0653153}, {
    "lat": 14.5549967,"lng":121.0479426}, {
    "lat": 14.6229581,"lng":121.0231966}, {
    "lat": 14.6201032,"lng":121.0175854}, {
    "lat": 14.6411973,"lng":121.0316965}, {
    "lat": 14.6278009,"lng":121.0347193}, {
    "lat": 14.6603769,"lng":121.0169899}, {
    "lat": 14.6121223, "lng": 121.0917297}, {
    "lat": 14.61416,"lng":120.98189}, {
    "lat": 14.69557,"lng":120.96298}, {
    "lat": 14.63511,"lng":120.96312}, {
    "lat": 14.63496,"lng":121.10391}, {
    "lat": 14.60974,"lng":121.05211}, {
    "lat": 14.5816,"lng":121.04127}, {
    "lat": 14.6770238,"lng":121.0499221}, {
    "lat": 14.60094,"lng":121.09226}, {
    "lat": 14.47162,"lng":120.97382}, {
    "lat": 14.47162,"lng":120.97382}, {
    "lat": 14.66111,"lng":121.01815}, {
    "lat": 14.41418,"lng":121.04418}, {
    "lat": 14.46452,"lng":121.01961}, {
    "lat": 14.4886713,"lng":120.9928554}, {
    "lat": 14.4585451,"lng":121.0334694}, {
    "lat": 14.7152596,"lng":120.957402}, {
    "lat": 14.58357,"lng":121.01645}, {
    "lat": 14.594906,"lng":121.0225743}, {
    "lat": 14.57801,"lng":120.98554}, {
    "lat": 14.63468,"lng":121.0521}, {
    "lat": 14.47496,"lng":121.04482}, {
    "lat": 14.69889,"lng":121.06717}, {
    "lat": 14.53858,"lng":120.99337}, {
    "lat": 14.55596,"lng":120.99532}, {
    "lat": 14.5825607,"lng":120.9855384}, {
    "lat": 14.6158156,"lng":120.989331}, {
    "lat": 14.6090156,"lng":120.9661138}, {
    "lat": 14.54929,"lng":121.00099}, {
    "lat": 14.7095,"lng":121.03886}, {
    "lat": 14.62145,"lng":121.08291}, {
    "lat": 14.5820156,"lng":120.9828937}, {
    "lat": 14.56399,"lng":120.98643}, {
    "lat": 14.6113,"lng":120.99021}, {
    "lat": 14.56391,"lng":121.06613}, {
    "lat": 14.42973,"lng":121.00354}, {
    "lat": 14.66822,"lng":121.07611}, {
    "lat": 14.65637,"lng":121.03982}, {
    "lat": 14.5900884,"lng":121.0690892}, {
    "lat": 14.60619,"lng":120.98422}, {
    "lat": 14.68976,"lng":120.97807}, {
    "lat": 14.61403,"lng":120.98903}, {
    "lat": 14.5169057,"lng":121.0199457}, {
    "lat": 14.76668,"lng":121.0647}, {
    "lat": 14.64768,"lng":121.04149}, {
    "lat": 14.62035,"lng":121.02095}, {
    "lat": 14.5593219,"lng":121.0148978}, {
    "lat": 14.5629,"lng":121.00123}, {
    "lat": 14.65769,"lng":120.98698}, {
    "lat": 14.64403,"lng":121.04843}, {
    "lat": 14.6642031,"lng":121.069112}, {
    "lat": 14.7315975,"lng":121.0606509}, {
    "lat": 14.5762165,"lng":121.0354784}, {
    "lat": 14.5462995,"lng":121.0618633}, {
    "lat": 14.6474774,"lng":121.0457593}, {
    "lat": 14.3949343,"lng":121.0452202}, {
    "lat": 14.6097423,"lng":120.9786504}, {
    "lat": 14.4858303,"lng":121.0286066}, {
    "lat": 14.6221328,"lng":121.0725707}, {
    "lat": 14.613895,"lng":120.9806782}, {
    "lat": 14.6476071,"lng":121.0472131}, {
    "lat": 14.6360485,"lng":121.0984379}, {
    "lat": 14.641898,"lng":121.0479319}, {
    "lat": 14.668888,"lng":121.0338128}, {
    "lat": 14.6247644,"lng":121.0024765}, {
    "lat": 14.617186,"lng":121.0018918}, {
    "lat": 14.6343409,"lng":121.0226789}, {
    "lat": 14.6031691,"lng":120.9899707}, {
    "lat": 14.6259849,"lng":120.9878665}, {
    "lat": 14.6066355,"lng":121.0207128}, {
    "lat": 14.6270794,"lng":121.0633224}, {
    "lat": 14.6205989,"lng":121.0091686}, {
    "lat": 14.5724576,"lng":121.099205}, {
    "lat": 14.5976107,"lng":121.0457217}, {
    "lat": 14.6884,"lng":121.030011}, {
    "lat": 14.650969,"lng":121.107638}, {
    "lat": 14.6277438,"lng":121.003448}, {
    "lat": 14.5618504,"lng":121.0754326}];

    for ( var i = 0; i < markers.length; ++i )
      {
        
      //   var circle = L.circle([markers[i].lat, markers[i].lng], {
      //     color: 'red',
      //     fillColor: '#f03',
      //     fillOpacity: 0.5,
      //     radius: 1000
      // })
      //circle.bindPopup(title);
      // markerClusters.addLayer(circle);

        var m = L.marker( [markers[i].lat, markers[i].lng], )

        markerClusters.addLayer( m );
      }
      map.addLayer( markerClusters );
}
