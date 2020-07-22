var lenika ={
	nombre:'Lenika',
	apellido:'Guerrero',
	edad:24
}

var sasha={
	nombre:'Sasha',
	apellido:'Lifszyc',
	edad:28
}

function imprimirNombreMayusculas(persona){ 
	//var nombre=persona.nombre;
	var {nombre}=persona; //Nombre de la variable como parámetro de la segunda variable (para no duplicar variables)
	console.log(nombre.toUpperCase());
}

imprimirNombreMayusculas(lenika);
imprimirNombreMayusculas(sasha);
//imprimirNombreMayusculas({nombre:'Brenda'});

function imprimirNombreYEdad({nombre,edad}){
	console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreYEdad(lenika);
imprimirNombreYEdad(sasha);