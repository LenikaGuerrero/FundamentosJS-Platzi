const API_URL='https://swapi.dev/api/';
const PEOPLE_URL='people/:id/';
const opts={crossDomain:true}

//La funcion ya no recibe un callback, 
//directamente retornara a una promesa

function obtenerPersonaje(id){
	return new Promise((resolve,reject)=>{
		const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
		$
			.get(url, opts, function(data){
				resolve(data)
				//data = personaje
				//La funcion no se ejecuta hasta que el get sea exitoso//La funcion no se ejecuta hasta que el get sea exitoso
			})
			.fail(() => reject(id))
			//id del personaje

	});
}

function onError(id){
	console.log(`Sucedio un error al obtener el personaje ${id}`);
}

obtenerPersonaje(1)
	.then(function(personaje){
		console.log(`El personaje 1 es ${personaje.name}`);
	})

	.catch(onError)
	
	/*.catch(function(id){
		onError(id);
	})*/


