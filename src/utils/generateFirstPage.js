const {generateChartPie} = require("./generateChartPie");

async function generateFirstPage(doc , directory , data ){
    doc.font("Helvetica-Bold");
    doc.fontSize(26).text(`${data.nombre_cliente}`, 38, 175 , {align: 'center'}).moveDown();
    doc.font("Helvetica");
    doc.fontSize(17.5).fillColor('#667667').text(`${data.correo_cliente}`, 38, 220 , {align: 'center'}).moveDown();
    doc.font("Helvetica-Bold");
    doc.fontSize(27).fillColor('#FE9A00').text(`${data.porcentaje_calce}% de calce`, 38, 512 , {align: 'center'}).moveDown();
    doc.font("Helvetica");
    doc.
      fontSize(12)
      .fillColor('#C7C7C7')
      .text( "Los resultados de esta evaluación están basados en las respuestas al cuestionario de TestKokoro. El propósito de esta evaluación es proporcionar información de apoyo para tomar mejores decisiones de contratación basadas en datos.", 
        50, 630 , {width: 500 , lineGap: 6}).moveDown();
  
    await generateChartPie(doc , directory , data);
}

module.exports = {
    generateFirstPage
};