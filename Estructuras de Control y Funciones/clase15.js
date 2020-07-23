var contador = 0

const llueve =()=>Math.random()<0.25;

do{
 contador++;

}while(!llueve())



//Normal (Sin operador Tenario)

/*
var frecuencia;

if(contador===1){
	frecuencia='vez';
}
else{
	frecuencia='veces';
}
*/

//Operador Tenario

var frecuencia=contador===1 ? 'vez':'veces';

console.log(`Fui a ver si llovia ${contador} ${frecuencia}`);