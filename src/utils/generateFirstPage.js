const {generateChartPie} = require("./generateChartPie");

async function generateFirstPage(doc , directory , data ){

    let date = new Date();

    doc.image("assets/firstpage.png" , 0 , 0 , {with: 300})
    doc.image("assets/logo.png", 64, 25, { width: 46 })

    .font("Helvetica").fontSize(14).fillColor('#C7C7C7')
    .text(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}` , 495 , 37 , {align: 'left'})

    .font("Helvetica-Bold").fontSize(14).fillColor('#FE9A00')
    .text('Evaluación' , 81 , 95 , {align: 'left'})

    .font("Helvetica").fontSize(13).fillColor('black')
    .text(`${data.nombre_evaluacion}` , 81 , 112 , {align: 'left'})

    .font("Helvetica-Bold").fontSize(14).fillColor('#FE9A00')
    .text('Postulante' , 371 , 95 , {align: 'left'})

    .font("Helvetica").fontSize(13).fillColor('black')
    .text(`${data.nombre_cliente}` , 371 , 112 , {align: 'left'})

    .image("assets/envelope.png", 372, 127, { width: 12 })
    .font("Helvetica").fontSize(9).fillColor('#FE9A00')
    .text(`${data.correo_cliente}` , 387 , 128 , {align: 'left' , characterSpacing: 0.04})

    .font("Helvetica-Bold").fontSize(10).fillColor('black')
    .text(`Fecha de invitación` , 64 , 197 , {align: 'left'})

    .font("Helvetica-Bold").fontSize(10).fillColor('black')
    .text(`Fecha de invitación` , 265 , 197 , {align: 'left'})

    .font("Helvetica-Bold").fontSize(10).fillColor('black')
    .text(`Puntaje de calce` , 475 , 197 , {align: 'left'})
    .fontSize(12)
    .text(`${data.porcentaje_calce}%` , 475 , 212 , {align: 'left'})

    .font("Helvetica-Bold")
    .fontSize(27).fillColor('#FE9A00').text(`${data.porcentaje_calce}% de calce`, 55, 575 , {align: 'center'})
    
    .font("Helvetica").fontSize(10).fillColor('#C7C7C7')
    .text( "Los resultados de esta evaluación están basados en las respuestas al cuestionario de TestKokoro. El propósito de esta evaluación es proporcionar información de apoyo para tomar mejores decisiones de contratación basadas en datos.", 57, 655 , {width: 500 , lineGap: 2.5 , align: 'center'})
    
    .image("assets/svg_potenciado.png", 237, 737, { width: 120 })
  
    await generateChartPie(doc , directory , data);
}

module.exports = {
    generateFirstPage
};