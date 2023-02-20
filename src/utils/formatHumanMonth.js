function formatHumanMonth(month) {

    switch(month){
     case '01': return 'ene';
     case '02': return 'feb';
     case '03': return 'mar';
     case '04': return 'abr';
     case '05': return 'may';
     case '06': return 'jun';
     case '07': return 'jul';
     case '08': return 'ago';
     case '09': return 'sep';
     case '10': return 'oct';
     case '11': return 'nov';
     case '12': return 'dic';
    }
 }
 
 module.exports = {
    formatHumanMonth
 };