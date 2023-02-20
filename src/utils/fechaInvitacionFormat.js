const {formatHumanMonth} = require('./formatHumanMonth');

function fechaInvitacionFormat(date) {

   month = date.slice(3, -5);
   month = formatHumanMonth(month);

   return `${date.slice(0 , - 8)}/${month}/${date.slice(6)}`;

}

module.exports = {
    fechaInvitacionFormat
};