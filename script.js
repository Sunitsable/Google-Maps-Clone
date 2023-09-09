mapboxgl.accessToken =
  "pk.eyJ1Ijoic3VuaXQyOSIsImEiOiJjbG1ieXg1NzMxMmJyM2VvNW90cDZ0NHI1In0.QrlN6LFfAtir3P2MK0Ig_A";

navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{
    enableHighAccuracy:true
})
function successLocation(position){
    console.log(position)
    setupMap([position.coords.longitude,position.coords.latitude])
}
function errorLocation(){}

function setupMap(center){
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center:center,
    zoom:15
  });
  const nav=new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions=new MapboxDirections({
    accessToken:mapboxgl.accessToken
    
  });
  map.addControl(directions,'top-left')
}