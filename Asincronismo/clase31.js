const API_URL='https://swapi.dev/api/';
const PEOPLE_URL='people/:id/';
const opts={crossDomain:true}


function obtenerPersonaje(id, callback){
	const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

	//fail se ejecutara si hay un error
	$.
		get(url, opts, callback)
		.fail(() =>
			console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`)
		);
}

//Con el Asincronismo no se sabe en que orden van a llegar los request
//Depende del servidor y cuanto tarda en responder a los request

//Para poner en orden los request se piden en serie y no en paralelo
//Callback Hell
obtenerPersonaje(1, function(personaje){
	console.log(`Hola, yo soy ${personaje.name}`);

	obtenerPersonaje(2,function(personaje){
		console.log(`Hola, yo soy ${personaje.name}`);

		obtenerPersonaje(3, function(personaje){
			console.log(`Hola, yo soy ${personaje.name}`);

			obtenerPersonaje(4, function(personaje){
				console.log(`Hola, yo soy ${personaje.name}`);

				obtenerPersonaje(5, function(personaje){
					console.log(`Hola, yo soy ${personaje.name}`);

					obtenerPersonaje(6, function(personaje){
						console.log(`Hola, yo soy ${personaje.name}`);

						obtenerPersonaje(7, function(personaje){
							console.log(`Hola, yo soy ${personaje.name}`);
						});
					});
				});
			});
		});
	});
});


