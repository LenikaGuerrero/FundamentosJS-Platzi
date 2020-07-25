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

//funcion asincrona
async function obtenerPersonajes(){
	var ids =[1,2,3,4,5,6,7]

	//Retorna un array modificado a partir de id
	//Por cada elemento retorna una promesa
	var promesas = ids.map(id => obtenerPersonaje(id));
	try{
		//La funcion se detiene hasta guardar todas las promesas cuando sean resueltas
		var personajes= await Promise.all(promesas);
		console.log(personajes);

	}catch(id){
		onError(id);
	}
	
}

obtenerPersonajes();