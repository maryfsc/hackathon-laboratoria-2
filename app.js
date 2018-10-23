$(document).ready(() => {


  // const url = 'https://route.api.here.com/routing/7.2/calculateroute.json?app_id=vhWjDv2Os9TALNb7sd27&app_code=x-R2uX7SKYidrk8UZrpOLQ&waypoint0=geo!52.5,13.4&waypoint1=geo!52.5,13.45&mode=fastest;car;traffic:disabled';

  // jQuery.ajax({
  //   type: 'GET',
  //   url,
  //   success: requestSuccess,
  //   error: handleError,
  //   crossDomain: true
  // })

}); // end jquery

function requestSuccess() {
	console.log('foi!')
}
function handleError() {
	console.log('erro');
}

	var platform = new H.service.Platform({
  	'app_id': 'vhWjDv2Os9TALNb7sd27',
  	'app_code': 'x-R2uX7SKYidrk8UZrpOLQ',
		useHTTPS: true
	});

	var maptypes = platform.createDefaultLayers();

	var map = new H.Map(
  document.getElementById('mapContainer'),
  defaultLayers.normal.map,
  {
    zoom: 10,
    center: { lat: 52.5, lng: 13.4 }
  });
