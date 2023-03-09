function printDateHeaderFirstPage(doc) {

    let date = new Date();

    let month = '';
    let dayOfWeek = '';

    switch(date.getDay()){
        case 0: dayOfWeek = 'Domingo';break;
        case 1: dayOfWeek = 'Lunes';break;
        case 2: dayOfWeek = 'Martes';break;
        case 3: dayOfWeek = 'Miercoles';break;
        case 4: dayOfWeek = 'Jueves';break;
        case 5: dayOfWeek = 'Viernes';break;
        case 6: dayOfWeek = 'Sabado';break;
    }

    switch(date.getMonth()){
        case 0: month = 'Enero';break;
        case 1: month = 'Febrero';break;
        case 2: month = 'Marzo';break;
        case 3: month = 'Abril';break;
        case 4: month = 'Mayo';break;
        case 5: month = 'Junio';break;
        case 6: month = 'Julio';break;
        case 7: month = 'Agosto';break;
        case 8: month = 'Septiembre';break;
        case 9: month = 'Octubre';break;
        case 10: month = 'Noviembre';break;
        case 11: month = 'Diciembre';break;
    }

    doc.font("Helvetica").fontSize(12.5).fillColor('black')
    .text(`${dayOfWeek} ${date.getDate()} de ${month}, ${date.getFullYear()}` , 170 , 47 , {align: 'right', width: 400})
}

module.exports = {
    printDateHeaderFirstPage
};