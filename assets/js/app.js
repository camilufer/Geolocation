function findMe(){
	var output = document.getElementById('map');
  	
  	// Verificar si soporta geolocalizacion
	if (navigator.geolocation) {
		output.innerHTML = "<p>Tu navegador soporta Geolocalizacion</p>";
	}else{
		output.innerHTML = "<p>Tu navegador no soporta Geolocalizacion</p>";
	}

	//Obtenemos latitud y longitud
	function localizacion(posicion){
		var latitude = posicion.coords.latitude;
		var longitude = posicion.coords.longitude;

		output.innerHTML = "<p>Latitud: "+latitude+"<br>longitud: "+longitude+ "</p>";

	}
	function error(){
		output.innerHTML = "<p>No se pudo obtener tu ubicación</p>"
	}
	navigator.geolocation.getCurrentPosition(localizacion, error);
	}
