class Persona{
    constructor(nombre, apellido, altura){
        this.nombre=nombre
        this.apellido =apellido
        this.altura = altura

    }

    saludar(fn){
        // var nombre=this.nombre;
        // var apellido=this.apellido;
        var{nombre,apellido}=this;
        console.log(`Hola, me llamo ${nombre} ${apellido}`);
        if(fn){
            //Manda los parametros de nombre,apellido,null a resporderSaludo()
            fn(nombre,apellido);
        }
    }

    soyAlto(){
        return this.altura>=1.8;
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre,apellido,altura);

    }

    saludar(fn){
        var{nombre,apellido}=this;
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador(a)`);
        if(fn){
            fn(nombre,apellido,true);
        }
    }
}
//funcion como parametro
function responderSaludo(nombre,apellido, esDev){
    console.log(`Buen Dia ${nombre} ${apellido}`);
    //Si se llega un parametro de true...
    if (esDev){
        console.log(`No sabia que eras Desarrollador(a)`);
    }
}

var lenika = new Persona('Lenika','Guerrero', 1.60);
var ericka= new Persona('Ericka','Luna',1.70);
var arturo = new Desarrollador('Arturo','Martinez', 1.85);

lenika.saludar();
ericka.saludar(responderSaludo)
arturo.saludar(responderSaludo);


