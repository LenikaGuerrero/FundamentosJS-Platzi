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

function cumpleanos(persona){
	return{
		...persona,
		edad:persona.edad+1
	}
}