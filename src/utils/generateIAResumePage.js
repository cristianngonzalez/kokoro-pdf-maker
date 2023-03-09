const {generateHeader} = require('../utils/generateHeader');

async function generateIAResumePage(doc , directory , data  , totalPages){

    doc.addPage();
    await generateHeader(doc , directory , data , 2, totalPages);


    doc.image("assets/logo-2.png" , 255 , 105 , {width: 100});

    doc.fontSize(15).font('Helvetica-Bold').fillColor('black')
    .text('INTERPRETACIÓN DEL REPORTE' , 0 , 228 , {width: 612 , align: 'center'});

    doc.fontSize(10).font('Helvetica-Bold').fillColor('#999999')
    .text('GENERADA CON INTELIGENCIA ARTIFICIAL' , 0 , 250 , {width: 612 , align: 'center'});

    doc.fontSize(10).font('Helvetica').fillColor('black')
    .text(data.ia_summary , 121 , 302 , {width: 370 , align: 'left' , lineGap: 2});

    doc.font("Helvetica").fontSize(8.6).fillColor('#C7C7C7')
    .text( "Los resultados de esta evaluación están basados en las respuestas al cuestionario de TestKokoro. El propósito de esta evaluación es proporcionar información de apoyo para tomar mejores decisiones de contratación basadas en datos.", 75, 680 , {width: 460 , lineGap: 2.5 , align: 'center'})
    
}

module.exports = {
    generateIAResumePage
};