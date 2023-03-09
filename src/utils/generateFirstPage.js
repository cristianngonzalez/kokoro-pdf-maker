const {generateChartPie} = require("./generateChartPie");
const {fechaInvitacionFormat} = require("./fechaInvitacionFormat");
const {fechaFinalizacionFormat} = require("./fechaFinalizacionFormat");

const {downloadAndPrintPicture} = require("../utils/downloadAndPrintPicture");
const {yesOrNotPrint} = require('../utils/yesOrNotPrint');
const {printDateHeaderFirstPage} = require('../utils/printDateHeaderFirstPage')


Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
  });

async function generateFirstPage(doc , directory , data ){

    const invitacionDate = fechaInvitacionFormat(data.fecha_invitacion);
    const finalizacionDate = fechaFinalizacionFormat(data.fecha_finalizacion);

    doc.image("assets/firstpage.png" , 0 , 0 , {with: 300})
    doc.image("assets/logo.png", 274 , 25, { width: 44 })

    printDateHeaderFirstPage(doc);

    doc.font("Helvetica-Bold").fontSize(14).fillColor('#FE9A00')
    .text('#ID Evaluación' , 81 , 85 , {align: 'left'})

    .font("Helvetica").fontSize(13).fillColor('black')
    .text(`${data.nombre_evaluacion}` , 81 , 102 , {align: 'left'})

    .font("Helvetica-Bold").fontSize(14).fillColor('#FE9A00')
    .text('Postulante' , 371 , 85 , {align: 'left'})

    .font("Helvetica").fontSize(13).fillColor('black')
    .text(`${data.nombre_cliente}` , 371 , 102 , {align: 'left'})

    .image("assets/envelope.png", 372, 121, { width: 12 })
    .font("Helvetica").fontSize(9).fillColor('#FE9A00')
    .text(`${data.correo_cliente}` , 387 , 122 , {align: 'left' , characterSpacing: 0.04})

    .font("Helvetica-Bold").fontSize(10).fillColor('black')
    .text(`Fecha de invitación` , 64 , 187 , {align: 'left'})
    .font("Helvetica").fontSize(11)
    .text(`${invitacionDate}` , 64 , 202 , {align: 'left'})
    .fontSize(12)

    .font("Helvetica-Bold").fontSize(10).fillColor('black')
    .text(`Fecha de finalización` , 245 , 187 , {align: 'left'})
    .font("Helvetica").fontSize(11)
    .text(`${finalizacionDate}` , 250 , 202 , {align: 'left'})
    .fontSize(12)

    .font("Helvetica-Bold").fontSize(10).fillColor('black')
    .text(`Puntaje global` , 425 , 187 , {align: 'left'})
    .font('Helvetica').fontSize(13).fillColor('#FE9A00')
    .text(`${data.porcentaje_calce}%` , 460 , 205 , {align: 'left'})
    .font("Helvetica-Bold")
    
    .font("Helvetica").fontSize(8.6).fillColor('#C7C7C7')
    .text( "Los resultados de esta evaluación están basados en las respuestas al cuestionario de TestKokoro. El propósito de esta evaluación es proporcionar información de apoyo para tomar mejores decisiones de contratación basadas en datos.", 85, 680 , {width: 460 , lineGap: 2.5 , align: 'center'})
    
    .image("assets/svg_potenciado.png", 237, 737, { width: 120 })

    await downloadAndPrintPicture(doc , directory , data.path_imagen_evaluado);
  
    await generateChartPie(doc , directory , data);

    //===========================================================================================================================================
    //Anticheating data
    doc.image("assets/camera.png", 60 , 310 , { width: 16 })
    .font("Helvetica-Bold").fontSize(14).fillColor('black')
    .text('Medidas anti-trampa' , 85 , 310)

    doc.font('Helvetica').fontSize(10).fillColor('black').text('Dispositivo Utilizado:' , 60 , 340)
    doc.font('Helvetica-Bold').fontSize(10).text(data.dispositivo , 300 , 340)

    doc.font('Helvetica').fontSize(10).fillColor('black').text('Pais:' , 60 , 370)
    doc.font('Helvetica-Bold').fontSize(10).text(data.pais , 300 , 370)

    doc.font('Helvetica').fontSize(10).fillColor('black').text('¿Realizado desde la misma dirección ip?' , 60 , 400 , {characterSpacing: -0.5});
    yesOrNotPrint(doc , 397 , true);

    doc.font('Helvetica').fontSize(10).fillColor('black').text('¿Webcam encendida?' , 60 , 430 )
    yesOrNotPrint(doc , 427 , data.camara_habilitada);

    doc.font('Helvetica').fontSize(10).fillColor('black').text('¿Full-screen activo durante todo el test?' , 60 , 460 )
    yesOrNotPrint(doc , 457 , data.fullscreen);


    //=================================================================================================================================================
    doc.image("assets/clock.png", 60 , 498 , { width: 14 })
    .font("Helvetica-Bold").fontSize(14).fillColor('black')
    .text('¿Respondió en el tiempo recomendado?' , 80 , 500)

    //Mapeando las evaluaciones
    let heightEvaluacion = 530
    data.evaluaciones.forEach(evaluacion => {
        doc.font('Helvetica').fontSize(10).fillColor('black').text(`${evaluacion.nombre_evaluacion.capitalize()}` , 60 , heightEvaluacion);
        yesOrNotPrint(doc , heightEvaluacion - 3  , evaluacion.cumple_tiempo);
        heightEvaluacion += 30;
    });

    /*
    doc.font('Helvetica').fontSize(10).fillColor('black').text('¿Realizado desde la misma dirección ip?' , 60 , 530 , {characterSpacing: -0.5});
    yesOrNotPrint(doc , 527 , true);

    doc.font('Helvetica').fontSize(10).fillColor('black').text('¿Webcam encendida?' , 60 , 560 )
    yesOrNotPrint(doc , 557 , data.camara_habilitada);

    doc.font('Helvetica').fontSize(10).fillColor('black').text('¿Full-screen activo durante todo el test?' , 60 , 590 )
    yesOrNotPrint(doc , 587 , data.fullscreen);

    doc.font('Helvetica').fontSize(10).fillColor('black').text('¿Mouse siempre sobre la ventana de evaluación?' , 60 , 610 , {characterSpacing: -0.25})
    yesOrNotPrint(doc , 607 , data.mouse_on_window);

    doc.font('Helvetica').fontSize(10).fillColor('black').text('¿Mouse siempre sobre la ventana de evaluación?' , 60 , 640 , {characterSpacing: -0.25})
    yesOrNotPrint(doc , 637 , data.mouse_on_window);
    */

}

module.exports = {
    generateFirstPage
};