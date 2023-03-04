const fs = require("fs");
const PDFDocument = require("pdfkit");
const uuid = require('uuid');

//Utils
const {generateHeader} = require("./utils/generateHeader");
const {generateFirstPage} = require("./utils/generateFirstPage");
const {generateTest} = require("./utils/generateTest");
const {generateHr} = require('./utils/generateHr');





async function createDocument(data , path) {

  //Make unique directory
  var directory = `./tmp_pdf_files/${uuid.v4()}`;
  if (!fs.existsSync(directory)){
      fs.mkdirSync(directory);
  }


  let doc = new PDFDocument({ size: "letter", margin: 40 });

  //Get TotalPages (apply three simple rule)
  totalPages = (data.test.length * 1) / 4;
  //Sumamos uno al total, ya que la primera pagina donde no carga items cuenta
  totalPages = Math.ceil(totalPages) + 1;


  await generateFirstPage(doc , directory , data);

  doc.addPage();
  await generateHeader(doc , directory , data , 2, totalPages);

  //Looping tests
  let y = 90//La primera altura es de 90, en el correr del loop ira subiendo hasta cambiar de pagina
  let pageNumber = 2;//Como ya imprimimos la primera pagina, esta ya estara asignada a 2; luego ira incrementando
  for(let i = 0; i < data.test.length; i++){
    //Analizar si cambiar de pagina
    if( ((i) % 4) == 0 && i !== 0 ){
      doc.addPage();
      pageNumber++;
      await generateHeader(doc , directory , data , pageNumber , totalPages);
      y = 90;
    }
    await generateTest(doc , directory , data.test[i] , y);
    if(data.test[i].texto_resultado.length < 100){
      y += 80;
    }else if(data.test[i].texto_resultado.length < 200){
      y += 100;
    }else if(data.test[i].texto_resultado.length < 300){
      y += 120;
    }else if(data.test[i].texto_resultado.length < 400){
      y += 140;
    }else if(data.test[i].texto_resultado.length < 500){
      y += 140;
    }else if(data.test[i].texto_resultado.length > 501){
      y += 160;
    }

    generateHr(doc , y - 15);
  }
  

  //Sync all png generated with the pdf file
  doc.pipe( fs.createWriteStream(path) );
  doc.end();

  //Delete temporal directory
  await fs.rmSync(directory, { recursive: true, force: true });
}



module.exports = {
  createDocument
};


