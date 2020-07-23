var lenika = {
    nombre: 'Lenika',
    apellido: 'Guerrero',
    altura: 1.60
}

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const esAlta =({altura})=>altura>=1.8;
const esBaja =({altura})=>!esAlta({altura});

var personas = [lenika,sacha,alan,dario,vicky,paula];

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);

/*var personasAltas = personas.filter(function(persona){
    return persona.altura>1.8;
})*/

//persona.altura = persona.altura*100;

/*const pasarAlturaACms =persona =>{

    //Nuevo objeto, no tiene relacion con la persona del array original
    return {
        ...persona,
        altura: persona.altura * 100
    }
} */
const pasarAlturaACms =persona =>({
    ...persona, //Nuevo objeto, no tiene relacion con la persona del array original
    altura: persona.altura * 100
})


var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms);
