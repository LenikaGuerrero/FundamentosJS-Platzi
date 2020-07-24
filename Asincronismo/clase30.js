const API_URL='https://swapi.dev/api/';
const PEOPLE_URL='people/:id/';
const opts={crossDomain:true}


function obtenerPersonaje(id, callback){
	const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

	$.get(url, opts, function(persona){
		console.log(`Hola, yo soy ${persona.name}`);

		if(callback){
			callback();
		}
	});
}

//Con el Asincronismo no se sabe en que orden van a llegar los request
//Depende del servidor y cuanto tarda en responder a los request

//Para poner en orden los request se piden en serie y no en paralelo
//Callback Hell
obtenerPersonaje(1, function(){
	obtenerPersonaje(2,function(){
		obtenerPersonaje(3, function(){
			obtenerPersonaje(4, function(){
				obtenerPersonaje(5, function(){
					obtenerPersonaje(6, function(){
						obtenerPersonaje(7);
					});
				});
			});
		});
	});
});


