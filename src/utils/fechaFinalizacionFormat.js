const {formatHumanMonth} = require('./formatHumanMonth');

function fechaFinalizacionFormat(date) {

    month = date.slice(3, -11);
    month = formatHumanMonth(month);

    return `${date.slice(0 , -14)}/${month}/${date.slice(6 , -6)}`;

}

module.exports = {
    fechaFinalizacionFormat
};