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
//request en paralelo
var ids =[1,2,3,4,5,6,7]

//Retorna un array modificado a partir de id
//Por cada elemento retorna una promesa
var promesas = ids.map(id => obtenerPersonaje(id));
// var promesas = ids.map(function(id){
// 	return obtenerPersonaje(id)
// })
Promise
	.all(promesas)
	.then(personajes =>console.log(personajes))
	.catch(onError)
//Request en serie
// obtenerPersonaje(1)
// 	.then(personaje =>{
// 		console.log(`El personaje 1 es ${personaje.name}`);
// 		return obtenerPersonaje(2);
// 		//Cuando se resuelva la promesa (devolver el valor)
// 		//Entra al siguente .then
// 	})
// 	.then(personaje =>{
// 		console.log(`El personaje 2 es ${personaje.name}`);
// 		return obtenerPersonaje(3);
// 	})
// 	.then(personaje =>{
// 		console.log(`El personaje 3 es ${personaje.name}`);
// 		return obtenerPersonaje(4);
// 	})
// 	.then(personaje =>{
// 		console.log(`El personaje 4 es ${personaje.name}`);
// 		return obtenerPersonaje(5);
// 	})
// 	.then(personaje =>{
// 		console.log(`El personaje 5 es ${personaje.name}`);
// 		return obtenerPersonaje(6);
// 	})
// 	.then(personaje =>{
// 		console.log(`El personaje 6 es ${personaje.name}`);
// 		return obtenerPersonaje(7);
// 	})
// 	.then(personaje =>{
// 		console.log(`El personaje 7 es ${personaje.name}`);
// 	})
// 	.catch(onError)
	
	/*.catch(function(id){
		onError(id);
	})*/


