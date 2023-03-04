function yesOrNotPrint(doc, y , element) {
    doc.image("assets/yes.png", 300 , y  , { width: 15 })
    .fontSize(13).font('Helvetica-Bold')
    .fillColor('#47AA97').text('Si' , 317 , y + 3)
}


module.exports = {
    yesOrNotPrint
};