function Persona(nombre, apellido, altura){
	this.nombre=nombre
	this.apellido =apellido
	this.altura = altura

}

//Modificando el Prototipo
Persona.prototype.saludar=()=>{
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

//Es importante donde se colocan los prototipos para el correcto funcionamiento
//Buena Practica: Colocarlos al inicio y no modificarlos a como se va programando
Persona.prototype.soyAlto=function(){
	return this.altura>=1.8 ;
}

/*Persona.prototype.soyAlto=function(){
	this.altura>=1.8 ? console.log(`${this.nombre} es Alto`):console.log(`${this.nombre} es Bajo`);
	
}*/



var lenika = new Persona('Lenika','Guerrero', 1.60);

var ericka= new Persona('Ericka','Luna',1.70);

var arturo = new Persona ('Arturo','Martinez', 1.85);



