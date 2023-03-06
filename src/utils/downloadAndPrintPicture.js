const fs = require("fs");
const request = require('request');
const uuid = require('uuid');

const fetch  = require('node-fetch');

async function downloadAndPrintPicture(doc , directory , uri){

	var filename = `${directory}/profile.png`;


	const downloadImage = async (url , path) => {
		
		const response = await fetch(url);
		const blob = await response.blob();
		const arrayBuffer = await blob.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);
		await fs.writeFileSync(path , buffer);
	}

	await downloadImage(uri , filename);

	try{

		await doc.image(filename, 350, 320, {width: 180})
		fs.rmSync(filename, {recursive: true, force: true});
			
	}catch (err) {
		console.error(err);
	}

}


module.exports = {
    downloadAndPrintPicture
};




