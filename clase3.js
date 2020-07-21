var edad = 23;
edad+=1;//edad =edad+1;

var peso =62;
peso -=2;//peso = peso -2;

var sandwich=1
peso+=sandwich; //peso=peso+sandwich

var jugarFutbol=3;
peso-=jugarFutbol;//peso=peso-jugarFutbol

var precioVino=200.3;

//var total=precioVino*100*3/100; //Un decimal

var total=Math.round(precioVino*100*3)/100; //Se redondean los decimales

var totalStr=total.toFixed(3); //Numeros decimales que se visualizaran (String)

var total2=parseFloat(totalStr); //Transformar a Decimal

var pizza=8;
var personas=2;
var cantidadPorciones=pizza/personas;