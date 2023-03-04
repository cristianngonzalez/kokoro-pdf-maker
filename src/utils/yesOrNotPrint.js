function yesOrNotPrint(doc, y , element) {

    if(element){
        doc.image("assets/yes.png", 300 , y  , { width: 13 })
        .fontSize(10).font('Helvetica-Bold')
        doc.fillColor('#47AA97').text('Si' , 316 , y + 3);
    }else{
        doc.image("assets/no.png", 300 , y  , { width: 13 })
        .fontSize(10).font('Helvetica-Bold')
        doc.fillColor('#A94848').text('No' , 316 , y + 3);
    }

    
}


module.exports = {
    yesOrNotPrint
};