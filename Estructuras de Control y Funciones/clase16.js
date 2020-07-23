var signo=prompt('¿Cual es tu Signo?');

switch(signo){
	case 'aries':

		console.log('Seguramente en este día se despierte con muy pocas ganas de cumplir con las responsabilidades diarias. Entienda que no es momento para decaer.');
	break
	case 'tauro':

		console.log('Durante este día, los engaños y las confusiones pueden llegar a ser el motivo de los problemas. Necesitará estar alerta para evitar que abusen de su confianza.');
	break
	case 'geminis':
	case 'géminis':
		console.log('Intente modificar la forma en que se desenvuelve, dejando de insistir en los detalles y aplicando la síntesis en todos sus pensamientos. Será muy positivo para su vida.');
	break
	case 'cancer':

		console.log('Si pretende adquirir nuevas responsabilidades a nivel personal, deberá agudizar sus percepciones y exponer todos sus conocimientos adquiridos en la vida.');
	break
	case 'leo':

		console.log('Será una jornada para planificar los detalles de todos los deseos que anheló en su vida. Prepárese, ya que pronto conseguirá alcanzarlos sin problemas.');
	break
	case 'virgo':

		console.log('Evite los exabruptos para luego no lamentarse. Prepárese, ya que será una jornada propicia para sentarse a medir las consecuencias de sus propias acciones.');
	break
	case 'libra':

		console.log('Esté muy atento, ya que ciertas fuerzas opuestas en su interior le provocarán algunas contradicciones en sus pensamientos. No se desespere y piense bien.');
	break
	case 'escorpio':

		console.log('Entienda que vivir el presente será importante para su vida. Intente dejar de lado los cuestionamientos que usted siempre hace a su entorno y no lo involucran.');
	break
	case 'sagitario':

		console.log('Verá que en poco tiempo, alcanzará el éxito como consecuencia del esfuerzo y empeño que ha puesto en todos sus objetivos profesionales y personales.');
	break
	case 'capricornio':

		console.log('No tenga culpa, intente dedicarse de lleno a los estudios y a eso que tanto le gusta hacer y por falta de tiempo no podía realizar. Anótese en ese curso online.');
	break
	case 'acuario':

		console.log('Intente sumergirse en su interior, allí encontrará la tranquilidad que tanto necesita. Etapa para que cultive el bienestar, la tranquilidad y la buena vida.');
	break
	case 'piscis':

		console.log('Aproveche que su mente estará despejada y será oportuno para que intercambie opiniones con alguien imparcial sobre ese tema que lo preocupa hace días.');
	break

	default:
		console.log('No es un signo zodiacal valido');
	break
}
