const {generateChartPie} = require("./generateChartPie");
const {fechaInvitacionFormat} = require("./fechaInvitacionFormat");
const {fechaFinalizacionFormat} = require("./fechaFinalizacionFormat");

const {downloadAndPrintPicture} = require("../utils/downloadAndPrintPicture");
const {yesOrNotPrint} = require('../utils/yesOrNotPrint');

async function generateFirstPage(doc , directory , data ){

    let date = new Date();


    const invitacionDate = fechaInvitacionFormat(data.fecha_invitacion);
    const finalizacionDate = fechaFinalizacionFormat(data.fecha_finalizacion);

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
    .text(`${invitacionDate}` , 64 , 212 , {align: 'left'})
    .fontSize(12)

    .font("Helvetica-Bold").fontSize(10).fillColor('black')
    .text(`Fecha de finalización` , 265 , 197 , {align: 'left'})
    .text(`${finalizacionDate}` , 265 , 212 , {align: 'left'})
    .fontSize(12)

    .font("Helvetica-Bold").fontSize(10).fillColor('black')
    .text(`Puntaje de calce` , 475 , 197 , {align: 'left'})
    .fontSize(12)
    .text(`${data.porcentaje_calce}%` , 475 , 212 , {align: 'left'})
    .font("Helvetica-Bold")
    .fontSize(15).fillColor('#FE9A00').text(`${data.porcentaje_calce}% de calce`, 55, 615 , {align: 'center'})
    
    .font("Helvetica").fontSize(10).fillColor('#C7C7C7')
    .text( "Los resultados de esta evaluación están basados en las respuestas al cuestionario de TestKokoro. El propósito de esta evaluación es proporcionar información de apoyo para tomar mejores decisiones de contratación basadas en datos.", 57, 655 , {width: 500 , lineGap: 2.5 , align: 'center'})
    
    .image("assets/svg_potenciado.png", 237, 737, { width: 120 })

    await downloadAndPrintPicture(doc , directory , data.path_imagen_evaluado);
  
    await generateChartPie(doc , directory , data);


    //Anticheating data
    doc.image("assets/secure.png", 80 , 320 , { width: 18 })
    .font("Helvetica-Bold").fontSize(14).fillColor('black')
    .text('Medidas anti-trampa' , 105 , 327)

    doc.font('Helvetica').fontSize(10).fillColor('black').text('Dispositivo Utilizado:' , 80 , 370)
    doc.font('Helvetica-Bold').fontSize(10).text(data.dispositivo , 300 , 370)

    doc.font('Helvetica').fontSize(10).fillColor('black').text('¿Realizado desde la misma dirección ip?' , 80 , 400, {characterSpacing: -0.5});
    yesOrNotPrint(doc , 397 , true);

    doc.font('Helvetica').fontSize(10).fillColor('black').text('¿Webcam encendida?' , 80 , 430)
    yesOrNotPrint(doc , 427 , data.camara_habilitada);

    doc.font('Helvetica').fontSize(10).fillColor('black').text('¿Full-screen activo durante todo el test?' , 80 , 460)
    yesOrNotPrint(doc , 457 , data.fullscreen);

    doc.font('Helvetica').fontSize(10).fillColor('black').text('¿Mouse siempre sobre la ventana de evaluación?' , 80 , 490, {characterSpacing: -0.25})
    yesOrNotPrint(doc , 487 , data.mouse_on_window);

}

module.exports = {
    generateFirstPage
};