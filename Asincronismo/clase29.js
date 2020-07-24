const API_URL='https://swapi.dev/api/';
const PEOPLE_URL='people/:id/';
const opts={crossDomain:true}


const onPeopleResponse = function(persona){

	console.log(`Hola, yo soy ${persona.name}`);
}

function obtenerPersonaje(id){
	const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
	$.get(url, opts, onPeopleResponse);
}

//Con el Asincronismo no se sabe en que orden van a llegar los request
//Depende del servidor y cuanto tarda en responder a los request
obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
