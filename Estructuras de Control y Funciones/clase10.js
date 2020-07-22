var lenika ={
	nombre:'Lenika',
	apellido:'Guerrero',
	edad:18,
	ingeniero: true,
	cocinero: false,
	cantante: false,
	dj:false,
	guitarrista:false,
	drone:false
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

imprimirProfesiones(lenika);

function imprimirSiEsMayorDeEdad(persona){ // Desafio
	if(persona.edad>=18){
		console.log('Lenika es Mayor de Edad');
	}
	else
	{
		console.log('Lenika es Menor de Edad');
	}
}

imprimirSiEsMayorDeEdad(lenika);