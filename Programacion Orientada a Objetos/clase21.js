//La funcion se ejecuta cuando se crea una nueva persona(nuevo objeto)
function Persona(nombre, apellido, altura){
	this.nombre=nombre
	this.apellido =apellido
	this.altura = altura
	//this hace referencia al objeto que se crea a través de la función constructora
	//la funcion implicitamente retorna el objeto que se esta creando
}

//Dentro del Prototipo de Persona va a existir un atributo Saludar que va a ser una funcion
Persona.prototype.saludar=function(){
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto=function(){
	this.altura>=1.8 ? console.log(`${this.nombre} es Alto`):console.log(`${this.nombre} es Bajo`);
	
}

var lenika = new Persona('Lenika','Guerrero', 1.60);
//new: Sirve para crear nuevos objetos dado un prototipo

var ericka= new Persona('Ericka','Luna',1.70);

var arturo = new Persona ('Arturo','Martinez', 1.85);