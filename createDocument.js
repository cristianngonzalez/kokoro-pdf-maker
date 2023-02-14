const fs = require("fs");
const PDFDocument = require("pdfkit");

function createDocument(data , path) {
  let doc = new PDFDocument({ size: "letter", margin: 40 });

  generateHeader(doc , 1 );
  generateFirstPage(doc , data);

  doc.addPage();

  generateHeader(doc , 2);
  generateItem(doc , data);

  doc.end();
  doc.pipe(fs.createWriteStream(path));
}




function generateHeader(doc , page) {
  //Background
  doc.rect(0, 0, 612, 792);
  doc.fill('#F8F9F9');
  doc.image("assets/background.png" , 29 , 55 , {with: 50});

  //Header Elements
  doc
    .image("assets/logo.png", 39, 12, { width: 34 })
    .fillColor("#444444")

    .fontSize(11).text("Reporte de perfil  Wholesales Manager", 83, 23)

    .fontSize(10.5).fillColor('#C7C7C7').text("06/02/2023", 0, 17, { align: "right" })
    .fillColor('black').text(`Página ${page} de 9`, 0, 35, { align: "right" })

    .moveDown();
}

function generateFirstPage(doc , data ){
  doc.font("Helvetica-Bold");
  doc.fontSize(26).text(`${data.nombre_cliente}`, 20, 175 , {align: 'center'}).moveDown();
  doc.font("Helvetica");
  doc.fontSize(17.5).fillColor('#667667').text(`${data.correo_cliente}`, 20, 220 , {align: 'center'}).moveDown();
  doc.font("Helvetica-Bold");
  doc.fontSize(27).fillColor('#FE9A00').text("124% de calce", 20, 512 , {align: 'center'}).moveDown();
  doc.font("Helvetica");
  doc.
    fontSize(12)
    .fillColor('#C7C7C7')
    .text( "Los resultados de esta evaluación están basados en las respuestas al cuestionario de TestKokoro. El propósito de esta evaluación es proporcionar información de apoyo para tomar mejores decisiones de contratación basadas en datos.", 
      50, 630 , {width: 500 , lineGap: 6}).moveDown();
}

function generateItem(doc , data){
  //Loopeando el test


    doc.fontSize(10)
    .fillColor('black')
    .text(
      `${data.test[0].nombre_test}`, 
      50, 90 , {width: 500 , lineGap: 6})
    doc.moveDown();

    doc.fontSize(10)
    .fillColor('black')
    .text(
      `${data.test[0].medicion}`, 
      50, 110 , {width: 500 , lineGap: 6})
    doc.moveDown();


}


function generateHr(doc, y) {
  doc
    .strokeColor("#aaaaaa")
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(550, y)
    .stroke();
}

function formatCurrency(cents) {
  return "$" + (cents / 100).toFixed(2);
}

function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return year + "/" + month + "/" + day;
}

module.exports = {
  createDocument
};
