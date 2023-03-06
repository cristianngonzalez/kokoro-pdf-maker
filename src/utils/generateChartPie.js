const fs = require("fs");

const tmp = require("tmp");
const { ChartJSNodeCanvas } = require('chartjs-node-canvas'); 
const uuid = require('uuid');

/*Params: 
    doc: pdfFileInformation
    rate: percent to show in chart
*/
async function generateChartPie(doc , directory , data){
    const chartJSNodeCanvas = new ChartJSNodeCanvas({ type: 'png', width: 800, height: 600 });

    //data.porcentaje_calce may be greater than 100
    let statOne;
    let statTwo;
    let backgroundColor;
    if(data.porcentaje_calce > 100){
      statOne = data.porcentaje_calce - 100;
      statTwo = statOne - 100;
      backgroundColor = ["#ED8100", "#FE9A00"]

    }else{
      statOne = data.porcentaje_calce;
      statTwo = statOne - 100;
      backgroundColor = [ "#FE9A00" , "#EAEAEA"];
    }

    const configuration = {
      type: 'pie',
      data: {
        datasets: [{
          label: "Population (millions)",
          backgroundColor: backgroundColor,
          data: [statOne , statTwo],
          borderColor: 'transparent',
        }]
      },
      options: {
      },
    }
  
    // Generate chart image
    const imageBuffer = await chartJSNodeCanvas.renderToBuffer(configuration);

    try {
      fs.writeFileSync(`${directory}/chartpicturepie.png`, imageBuffer);
      // file written successfully
    } catch (err) {
      console.error(err);
    }

    try{
      var fileName = `chartPicturePie-${uuid.v4()}.png`;
      if (!fs.existsSync(`${directory}/${fileName}`)){
        // file written successfully
        fs.writeFileSync(`${directory}/${fileName}`, imageBuffer);
        doc.image(`${directory}/${fileName}`, 250 , 530 , {width: 120})
        //Delete temporary file chart
        fs.rmSync(`${directory}/${fileName}`, {recursive: true, force: true});
      }
    }catch (err) {
      console.error(err);
    }

  
}

module.exports = {
    generateChartPie
};