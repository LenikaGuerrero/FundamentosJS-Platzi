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

function imprimirNombreMayusculas({nombre}){ //desglose del objeto para acceder únicamente al atributo
	//var n=persona.nombre.toUpperCase(); //Acceso al Atributo Nombre
	console.log(nombre.toUpperCase());
}

imprimirNombreMayusculas(lenika);
imprimirNombreMayusculas(sasha);
imprimirNombreMayusculas({nombre:'Brenda'});