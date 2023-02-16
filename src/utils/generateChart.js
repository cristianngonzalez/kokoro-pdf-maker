const fs = require("fs");
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
const uuid = require('uuid');


async function generateChart(doc , directory , x , y , obtenido , calibrado){
  const chartJSNodeCanvas = new ChartJSNodeCanvas({ type: 'png', width: 200, height: 100 });

  //maxScale is the top of the chart, when obtenido and calibrado is lower than 100, maxScale is 100 else is 200
  let maxScale;
  if(obtenido > 100 || calibrado > 100){
    maxScale = 200;
  }else{
    maxScale = 100;
  }

  const conf = {
    type: 'bar',
    data: {
        labels: ['Obtenido', 'Calibrado'],
        datasets: [{
          data: [obtenido, calibrado , maxScale],
          backgroundColor: [
            'rgb(248, 154, 28)',
            'rgb(254, 215, 141)'
          ],
        }]
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
        customCanvasBackgroundColor: {
          color: 'lightGreen',
        },
        labels: {
          color: 'rgb(255, 99, 132)',
          size: 100
        },
      },
    }
  };
    
  // Generate chart image
  const imageBuffer = await chartJSNodeCanvas.renderToBuffer(conf);

  try{
    var fileName = `chartPicture-${uuid.v4()}.png`;
    if (!fs.existsSync(`${directory}/${fileName}`)){
      // file written successfully
      fs.writeFileSync(`${directory}/${fileName}`, imageBuffer);
      doc.image(`${directory}/${fileName}`, x, y, {width: 130});
      //Delete temporary file chart
      fs.rmSync(`${directory}/${fileName}`, {recursive: true, force: true});
    }
  }catch (err) {
    console.error(err);
  }

  
}

module.exports = {
    generateChart
};