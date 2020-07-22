var lenika ={
	nombre:'Lenika',
	apellido:'Guerrero',
	edad:23,
	ingeniero: true,
	cocinero: false,
	cantante: false,
	dj:false,
	guitarrista:false,
	drone:false
}

var juan ={
	nombre:'Juan',
	apellido:'Gomez',
	edad:13
}

function imprimirProfesiones(persona){
	console.log(`${persona.nombre} es:`);
	
	if(persona.ingeniero){
		console.log('Ingeniero');
	}
	else{
		console.log('No es Ingeniero');
	}
	
	if(persona.cocinero){
		console.log('Cocinero');
	}

	if(persona.cantante){
		console.log('Cantante');
	}

	if(persona.dj){
		console.log('DJ');
	}

	if(persona.guitarrista){
		console.log('Guitarrista');
	}

	if(persona.drone){
		console.log('Piloto Drone');
	}
}

const MAYORIA_DE_EDAD =18

function esMayorDeEdad(persona){
	return persona.edad>=MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad(persona){
	if(esMayorDeEdad(persona)){
		console.log(`${persona.nombre} es Mayor de Edad`);
	}
	else
	{
		console.log(`${persona.nombre} es Menor de Edad`);
	}
}

imprimirSiEsMayorDeEdad(juan);