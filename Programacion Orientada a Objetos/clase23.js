function Persona(nombre, apellido, altura){
	this.nombre=nombre
	this.apellido =apellido
	this.altura = altura

}


Persona.prototype.saludar=function(){
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

//this funciona diferente con Arrow Functions
//Dentro de la arrow function, this está haciendo referencia al espacio global, a windows
Persona.prototype.soyAlto=function(){
	return this.altura>=1.8;
}

var lenika = new Persona('Lenika','Guerrero', 1.60);
var ericka= new Persona('Ericka','Luna',1.70);
var arturo = new Persona ('Arturo','Martinez', 1.85);



