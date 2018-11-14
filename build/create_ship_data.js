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
			"faction": shipJson.faction,
			"size": shipJson.size,
			"shipIcon": `xwing-miniatures-ship-${shipJson.xws}`,
			"factionIcon": getFactionIcon(shipJson.faction),
			"pilots": getPilots(shipJson.pilots)
		};
           
		shipDataArray.push(shipData);
	}
	else {
		console.log(`¯\\_(ツ)_/¯ - skipping ${shipJson.faction} - ${shipJson.name}`);
	}
});

//sort by faction then ship name
shipDataArray.sort( (a, b) => 
	{ return a.faction.localeCompare(b.faction) || a.name.localeCompare(b.name); }
);

let shipDataFilePath = "./src/assets/ship-data.json";
fs.writeFileSync(shipDataFilePath, JSON.stringify(shipDataArray, null, 1));
console.log(`\n *CREATED ${shipDataFilePath} * \n`);


function getFactionIcon(faction) {
	switch(faction) {
		case "Rebel Alliance":
			return "xwing-miniatures-font-rebel";
		case "Galactic Empire":
			return "xwing-miniatures-font-empire";
		case "Scum and Villainy":
			return "xwing-miniatures-font-scum";
		case "Resistance":
			return "xwing-miniatures-font-rebel-outline";
		case "First Order":
			return "xwing-miniatures-font-firstorder";
		case "Galactic Republic":
			return "xwing-miniatures-font-republic";
		case "Separatist Alliance":
			return "xwing-miniatures-font-separatists";
		default:
			return null;
	}
}

function getPilots(pilots) {

	//sort by initiative desc, then pilot name asc
	pilots.sort((a,b) => {
		return b.initiative - a.initiative || a.name.localeCompare(b.name);
	})

	let pilotArray = [];
	pilots.forEach(pilot => {
		pilotArray.push(pilot.name);
	});

	return pilotArray;
}