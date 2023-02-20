const { createDocument } = require("./src/createDocument.js");
const uuid = require('uuid');
const fs = require("fs");

let data = {
	nombre_cliente:"Cristian Gonzalez",
	correo_cliente:"contact@cristanngonzalez.com",
	porcentaje_calce: 80,
	nombre_evaluacion: "Wholesales Manager",
	path_logo_empresa: "ruta_logo",
	test: [
		{
			escala: "correctas",
			nombre_test: "PRUEBA DE INTELIGENCIA LÓGICO MATEMÁTICA",
			medicion:"Muy Alto",
			puntaje_obtenido:0,
			puntaje_calibrado:100,
			texto_resultado:"Logrará hacer frente a diversos escenarios, haciendo uso de lo aprendido. Se enfrentará con facilidad a tareas donde deba emplear la habilidad para razonar y elaborar juicios. Comprenderá conceptos verbales y podrá abstraer, generalizar y pensar de modo constructivo. Presenta fluidez verbal y un bagaje lingüístico apropiado, contando un manejo adecuado del vocabulario. Trabajará adecuadamente con material cuantitativo y manejará en forma acertada y rápida operaciones de cálculo numérico, lo que también involucra la capacidad de atención y concentración", 
		},
    	{
			escala: "DISPOSICIÓN GENERAL PARA LAS VENTAS", 
			nombre_test: "PRUEBA DE ESTILO DE VENTA", 
			medicion: "Muy Alto",
				puntaje_obtenido:100,
				puntaje_calibrado :0,
				texto_resultado: "En la escala DISPOSICIÓN GENERAL PARA LA VENTA. Es el índice más discriminativo de los aaaa aaaa aaaaa Se desenvolvería dentro de lo esperado. Logrando establecer relaciones con sus clientes y buscando persuadirlos."
    	},
		
		{
			escala: "correctas",
			nombre_test: "PRUEBA DE INTELIGENCIA LÓGICO MATEMÁTICA",
			medicion:"Extremadamente bajo",
			puntaje_obtenido:150,
			puntaje_calibrado:180,
			texto_resultado:"Logrará hacer frente a diversos escenarios, haciendo uso de lo aprendido. Se enfrentará con facilidad a tareas donde deba emplear la habilidad para razonar y elaborar juicios. Comprenderá conceptos verbales y podrá abstraer, generalizar y pensar de modo constructivo. Presenta fluidez verbal y un bagaje lingüístico apropiado, contando un manejo adecuado del vocabulario. Trabajará adecuadamente con material cuantitativo y manejará en forma acertada y rápida operaciones de cálculo numérico, lo que también involucra la capacidad de atención y concentración", 
		},
    	{
			escala: "DISPOSICIÓN GENERAL PARA LAS VENTAS", 
			nombre_test: "PRUEBA DE ESTILO DE VENTA", 
			medicion: "Bajo",
				puntaje_obtenido:50,
				puntaje_calibrado :80,
				texto_resultado: "En la escala DISPOSICIÓN GENERAL PARA LA VENTA. Es el índice más discriminativo de los aaaa aaaaa aaa buenos vendedores Se desenvolvería dentro de lo esperado. Logrando establecer relaciones con sus clientes y buscando persuadirlos."
    	},
		{
			escala: "correctas",
			nombre_test: "PRUEBA DE INTELIGENCIA LÓGICO MATEMÁTICA",
			medicion:"Medianamente Bajo",
			puntaje_obtenido:50,
			puntaje_calibrado:80,
			texto_resultado:"Logrará hacer frente a diversos escenarios, haciendo uso de lo aprendido. Se enfrentará con facilidad a tareas donde deba emplear la habilidad para razonar y elaborar juicios. Comprenderá conceptos verbales y podrá abstraer, generalizar y pensar de modo constructivo. Presenta fluidez verbal y un bagaje lingüístico apropiado, contando un manejo adecuado del vocabulario. Trabajará adecuadamente con material cuantitativo y manejará en forma acertada y rápida operaciones de cálculo numérico, lo que también involucra la capacidad de atención y concentración", 
		},
    	{
			escala: "DISPOSICIÓN GENERAL PARA LAS VENTAS", 
			nombre_test: "PRUEBA DE ESTILO DE VENTA", 
			medicion: "Promedio",
				puntaje_obtenido:50,
				puntaje_calibrado :80,
				texto_resultado: "En la escala DISPOSICIÓN GENERAL PARA LA VENTA. Es el índice más discriminativo de los buenos vendedores Se desenvolvería dentro de lo esperado. Logrando establecer relaciones con sus clientes y buscando persuadirlos."
    	},

		{
			escala: "correctas",
			nombre_test: "PRUEBA DE INTELIGENCIA LÓGICO MATEMÁTICA",
			medicion:"Dentro del promedio",
			puntaje_obtenido:50,
			puntaje_calibrado:80,
			texto_resultado:"Logrará hacer frente a diversos escenarios, haciendo uso de lo aprendido. Se enfrentará con facilidad a tareas donde deba emplear la habilidad para razonar y elaborar juicios. Comprenderá conceptos verbales y podrá abstraer, generalizar y pensar de modo constructivo. Presenta fluidez verbal y un bagaje lingüístico apropiado, contando un manejo adecuado del vocabulario. Trabajará adecuadamente con material cuantitativo y manejará en forma acertada y rápida operaciones de cálculo numérico, lo que también involucra la capacidad de atención y concentración", 
		},
    	{
			escala: "DISPOSICIÓN GENERAL PARA LAS VENTAS", 
			nombre_test: "PRUEBA DE ESTILO DE VENTA", 
			medicion: "Medio",
				puntaje_obtenido:50,
				puntaje_calibrado :80,
				texto_resultado: "En la escala DISPOSICIÓN GENERAL PARA LA VENTA. Es el índice más discriminativo de los buenos vendedores Se desenvolvería dentro de lo esperado. Logrando establecer relaciones con sus clientes y buscando persuadirlos."
    	},
		{
			escala: "correctas",
			nombre_test: "PRUEBA DE INTELIGENCIA LÓGICO MATEMÁTICA",
			medicion:"Alto",
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
    	},
		{
			escala: "correctas",
			nombre_test: "PRUEBA DE INTELIGENCIA LÓGICO MATEMÁTICA",
			medicion:"Extremadamente alto",
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
				texto_resultado: "En la escala DISPOSICIÓN GENERAL PARA LA VENTA. Es el índice más discriminativo de los buenos_vendedores Se desenvolvería dentro de lo esperado. Logrando establecer relaciones con sus clientes y buscando persuadirlos."
    	},
		{
			escala: "DISPOSICIÓN GENERAL PARA LAS VENTAS", 
			nombre_test: "PRUEBA DE ESTILO DE VENTA", 
			medicion: "Muy Alto",
				puntaje_obtenido:50,
				puntaje_calibrado :80,
				texto_resultado: "En la escala DISPOSICIÓN GENERAL PARA LA VENTA. Es el índice más discriminativo de los buenos_vendedores Se desenvolvería dentro de lo esperado. Logrando establecer relaciones con sus clientes y buscando persuadirlos."
    	},
	]
}


//Uncomment in production (pdf in temporary files)
/*
try{
	var fileName = `./tmp/${data.nombre_cliente} - ${data.nombre_evaluacion}.pdf`;
		// file written successfully
		document = createDocument(data , fileName);

		setTimeout(()=>{
			fs.rmSync(fileName , {recursive: true, force: true});
		} , 2000);
		
}catch (err) {
	console.error(err);
}finally{
	//Delete temporary file pdf
}
*/

//Uncomment in production (pdf in temporary files)
createDocument(data , "document.pdf");
