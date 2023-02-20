async function generateHeader(doc , directory , data , page , totalPages) {

    let date = new Date();
    
    //Background
    doc.rect(0, 0, 612, 792);
    doc.fill('#F8F9F9');
    doc.image("assets/background.png" , 0 , 0 , {with: 50});

    //===================================================================
    //Header Elements
    doc
      .image("assets/logo.png", 39, 12, { width: 34 })
      .fillColor("#444444")
  
      .fontSize(11).font('Helvetica-Bold').text(`Reporte de perfil`, 83, 23)

      .fontSize(11).font('Helvetica').text(`${data.nombre_evaluacion}`, 175, 23)

      .fontSize(10.5).fillColor('#C7C7C7').text(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`, 0, 17, { align: "right" })
      .fillColor('black').text(`Página ${page} de ${totalPages}`, 0, 35, { align: "right" })

      .image("assets/svg_potenciado.png", 237, 737, { width: 120 })
      .moveDown();

      
}


module.exports = {
    generateHeader
};