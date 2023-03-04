function generateHr(doc, y) {
    doc.strokeColor("#aaaaaa").lineWidth(1).moveTo(50, y).lineTo(560, y).stroke();
}


module.exports = {
    generateHr
};