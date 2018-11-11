/* Extract ship data from xwing-data2 that also has associated font from xwing-miniatures-font */
var fs = require('fs');
var glob = require("glob");

let fontManifestPath = "./submodules/xwing-miniatures-font/src/json/ships-map.json"
let fontManifestContent = fs.readFileSync(fontManifestPath);
let fontManifestJson = JSON.parse(fontManifestContent);

let shipDataArray = [];

let pilotsDir = "./submodules/xwing-data2/data/pilots/*/*.json"
let shipFilePaths = glob.sync(pilotsDir);
shipFilePaths.forEach(shipFilePath => {
	let shipContent = fs.readFileSync(shipFilePath);
	let shipJson = JSON.parse(shipContent);

	//only parse pilot content if ffg id is defined (to filter out preview content), and font is available
	if(!shipJson.hasOwnProperty("ffg")) {
		console.log(`missing ffg id - skipping ${shipJson.faction} - ${shipJson.name}`);
	}
	else if (!fontManifestJson.ships.hasOwnProperty(shipJson.xws)) {
		console.log(`MISSING FONT - skipping ${shipJson.faction} - ${shipJson.name}`);
	}
	else if(shipJson.hasOwnProperty("ffg") && fontManifestJson.ships.hasOwnProperty(shipJson.xws)) {
		
		let shipData = {
			"ffg": shipJson.ffg,
			"name": shipJson.name,
            "xws": shipJson.xws,
            "size": shipJson.size,
			"faction": shipJson.faction
		};
           
        shipDataArray.push(shipData);
	}
	else {
		console.log(`¯\\_(ツ)_/¯ - skipping ${shipJson.faction} - ${shipJson.name}`);
	}
});

let shipDataFilePath = "./src/assets/ship-data.json";
fs.writeFileSync(shipDataFilePath, JSON.stringify(shipDataArray, null, 1));
console.log(`\n *CREATED ${shipDataFilePath} * \n`);