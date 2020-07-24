const API_URL='https://swapi.dev/api/';

const PEOPLE_URL='people/:id/';

const lukeUrl=`${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts={crossDomain:true}


const onPeopleResponse = function(persona){
	//ver los parametros
	//https://api.jquery.com/jQuery.get/

	//jQuery.get( url [, data ] [, success ] [, dataType ] )
	//URL:String que contiene la direccion url a la que se envia la solicitud
	//Data: Objeto o String sin formato que se envia al servidor con la solicitud
	//Success: Funcion de Respuesta de llamada que se ejecuta si la solicitud se realizo correctamente
	//dataType: El tipo de datos esperados del servidor.

	//arguments contiene el valor de los argumentos de la función
	//console.log(arguments);
	console.log(`Hola yo soy ${persona.name}`);
}


//get carga los datos de un servidor usando a HTTP GET request

//En este caso permite hacer un request con el URL de la API, 
//la URL de la pagina externa y el callback

//get llama a un callback

//un callback es una funcion que se va a ejecutar en algun futuro 
//(puede o no llamarse)

$.get(lukeUrl, opts, onPeopleResponse)