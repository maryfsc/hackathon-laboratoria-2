fetch('https://geocoder.api.here.com/6.2/geocode.json?app_id=vhWjDv2Os9TALNb7sd27&app_code=x-R2uX7SKYidrk8UZrpOLQ&searchtext=Rua+Palma+Sola+208+São+Paulo').then(function(response){ 

  response.json().then(function(data) {
  	console.log(data)
    const adressLat = data.Response.View[0].Result[0].Location.DisplayPosition.Latitude;
    const adressLong = data.Response.View[0].Result[0].Location.DisplayPosition.Longitude;

  });

});