class Persona{
	constructor(nombre, apellido, altura){
		this.nombre=nombre
		this.apellido =apellido
		this.altura = altura

	}

	saludar(){
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
	}

	soyAlto(){
		return this.altura>=1.8;
	}
}

class Desarrollador extends Persona{
	constructor(nombre, apellido, altura){
		super(nombre,apellido,altura);

	}

	saludar(){
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador(a)`);

	}
}


// var lenika = new Persona('Lenika','Guerrero', 1.60);
// var ericka= new Persona('Ericka','Luna',1.70);
// var arturo = new Persona ('Arturo','Martinez', 1.85);



