const { createDocument } = require("./createDocument.js");


let data = {
	nombre_cliente:"Jorge Arellano",
	correo_cliente:"jorge.arellano@testkokoro.com",
	porcentaje_calce: '124%',
	nombre_evaluacion: "Wholesales Manager",
	path_logo_empresa: "ruta_logo",
	test:
	[
		{
		  escala: "correctas",
		  nombre_test: "PRUEBA DE INTELIGENCIA LÓGICO MATEMÁTICA",
		  medicion:"Muy Alto",
		  puntaje_obtenido:50,
		  puntaje_calibrado:80,
		  texto_resultado:"Logrará hacer frente a diversos escenarios, haciendo uso de lo aprendido. Se enfrentará con facilidad a tareas donde deba emplear la habilidad para razonar y elaborar juicios. Comprenderá conceptos verbales y podrá abstraer, generalizar y pensar de modo constructivo. Presenta fluidez verbal y un bagaje lingüístico apropiado, contando un manejo adecuado del vocabulario. Trabajará adecuadamente con material cuantitativo y manejará en forma acertada y rápida operaciones de cálculo numérico, lo que también involucra la capacidad de atención y concentración", 
		},
    {
      escala: "DISPOSICIÓN GENERAL PARA LAS VENTAS", 
      nombre_test: "PRUEBA DE ESTILO DE VENTA", 
      medicion: "Muy Alto",
		  puntaje_obtenido:50,
		  puntaje_calibrado :80,
		  texto_resultado: "En la escala DISPOSICIÓN GENERAL PARA LA VENTA. Es el índice más discriminativo de los",
			buenos_vendedores: "Se desenvolvería dentro de lo esperado. Logrando establecer relaciones con sus clientes y buscando persuadirlos."
    }
	]
}

createDocument(data , "document.pdf");
