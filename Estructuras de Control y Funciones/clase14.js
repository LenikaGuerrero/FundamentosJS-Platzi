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
const INCREMENTO_PESO =0.3; //incremento o decremento de gramos
const DIAS_DEL_ANO= 365;

const aumentarDePeso =persona=>persona.peso+=INCREMENTO_PESO;
const adelgazar =persona=>persona.peso-=INCREMENTO_PESO;
const comeMucho =()=>Math.random()<0.3;
const realizaDeporte =()=>Math.random()<0.4;

const META = lenika.peso - 3;
var dias =0;

while(lenika.peso>META){
	if(comeMucho()){
		aumentarDePeso(lenika);
	}
	if(realizaDeporte()){
		adelgazar(lenika);
	}
	dias++;
}

console.log(`Pasaron ${dias} dias hasta que ${lenika.nombre} adelgazo 3Kg`)
//console.log(`Al final del año ${lenika.nombre} pesa ${lenika.peso.toFixed(2)} Kg`);