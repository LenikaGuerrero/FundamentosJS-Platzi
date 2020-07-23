var lenika ={
	nombre:'Lenika',
	apellido:'Guerrero',
	edad:23,
	peso:60
}


console.log(`Al inicio del año ${lenika.nombre} pesa ${lenika.peso} Kg`);

/*function aumentarDePeso(persona){
	return persona.peso+=200;
}*/
const INCREMENTO_PESO =0.2; //incremento o decremento de gramos
const DIAS_DEL_ANO= 365;

const aumentarDePeso =persona=>persona.peso+=INCREMENTO_PESO;
const adelgazar =persona=>persona.peso-=INCREMENTO_PESO;


for(var i=1;i<DIAS_DEL_ANO;i++){
	var random=Math.random();
	if(random<0.25){
		aumentarDePeso(lenika);
	}
	else if(random<0.5){
		adelgazar(lenika);
	}
}

console.log(`Al final del año ${lenika.nombre} pesa ${lenika.peso.toFixed(2)} Kg`);