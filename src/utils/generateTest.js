const { generateChart } = require("./generateChart");

async function generateTest(doc , directory , test , y){

  //Dependiendo de la medicion cambiaremos el calor de la fuente
  let color;
  switch ( test.medicion.toUpperCase() ) {
    case 'MUY ALTO': color = '#81BF6D'; break;
    case 'ALTO': color = '#81BF6D'; break;
    case 'EXTREMADAMENTE ALTO': color = '#81BF6D'; break;
    case 'MEDIO': color = '#FED88C'; break;
    case 'DENTRO DEL PROMEDIO': color = '#FED88C'; break;
    case 'PROMEDIO': color = '#FED88C'; break;
    case 'MEDIANAMENTE BAJO': color = '#F26956'; break;
    case 'BAJO': color = '#F26956'; break;
    case 'EXTREMADAMENTE BAJO': color = '#F26956'; break;
    default: color = 'black';break;
  }

  //Loopeando el test
  doc.fontSize(10).font("Helvetica-Bold")
    .fillColor('black')
    .text(
      `${test.escala.toUpperCase()}`, 
      50, y , { lineGap: 6 , continued: true})
    
    .fontSize(10).font('Helvetica-Bold').fillColor(color).text(` ${test.medicion.toUpperCase()}`)

  
  .fontSize(10).fillColor('#afafaf').text( `${test.nombre_test.toLowerCase().capitalize()}` , {width: 500 , lineGap: 6})

  .fontSize(8).font("Helvetica")
    .fillColor('black')
    .text(
      `${test.texto_resultado}` , {width: 380 , lineGap: 4})
    
  
  
  await generateChart( doc , directory , 430 , y , test.puntaje_obtenido , test.puntaje_calibrado );

  doc.moveDown();
}

module.exports = {
    generateTest
};
  