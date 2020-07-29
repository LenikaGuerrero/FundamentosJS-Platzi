var lenika ={
    nombre:'Lenika',
    apellido:'Guerrero',
    edad:23
}


function esMayorDeEdad(persona){
    //var mensaje
    let mensaje //Se reduce el alcance al bloque donde es utilizado
    const MAYORIA_EDAD=18 //ya no podran ser modificadas ni declaradas nuevamente, en ninguna otra parte de la función o el contexto en el que ya existen

    if(persona.edad>=MAYORIA_EDAD){
        mensaje= 'Es Mayor de Edad'
    }
    else{
        mensaje = 'Es menor de Edad'

    }
    console.log(mensaje)
}

//esMayorDeEdad(lenika)


// for(var i=0;i<10;i++){
//     console.log(i)
// }

for(let i=0;i<10;i++){
    console.log(i)
}

console.log(`Termino el for, el valor de i es ${i}`)