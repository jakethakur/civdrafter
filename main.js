let leaders = [
	{name: "Teddy Roosevelt", civilization: "American", paywall: "none", expansion: "none", banned: false},
	{name: "Saladin", civilization: "Arabian", paywall: "none", expansion: "none", banned: false},
	{name: "John Curtin", civilization: "Australian", paywall: "Base Game DLC", expansion: "none", banned: false},
	{name: "Montezuma", civilization: "Aztec", paywall: "none", expansion: "none", banned: false},
	{name: "Pedro II", civilization: "Brazillian", paywall: "none", expansion: "none", banned: false},
	{name: "Wilfrid Laurier", civilization: "Canadian", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false},
	{name: "Qin Shi Huang", civilization: "Chinese", paywall: "none", expansion: "none", banned: false},
	{name: "Poundmaker", civilization: "Cree", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false},
	{name: "Wilhelmina", civilization: "Dutch", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false},
	{name: "Cleopatra", civilization: "Egyptian", paywall: "none", expansion: "none", banned: false},
	{name: "Victoria", civilization: "England", paywall: "none", expansion: "none", banned: false},
	{name: "Eleanor of Aquitaine", civilization: "England", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false},
	{name: "Eleanor of Aquitaine", civilization: "French", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false},
	{name: "Catherine de Medici", civilization: "French", paywall: "none", expansion: "none", banned: false},
	{name: "Tamar", civilization: "Georgian", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false},
	{name: "Frederick Barbarossa", civilization: "German", paywall: "none", expansion: "none", banned: false},
	{name: "Simón Bolívar", civilization: "Gran Colombian", paywall: "Frontier Pass", expansion: "none", banned: false},
	{name: "Pericles", civilization: "Greek", paywall: "none", expansion: "none", banned: false},
	{name: "Gorgo", civilization: "Greek", paywall: "none", expansion: "none", banned: false},
	{name: "Matthias Corvinus", civilization: "Hungarian", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false},
	{name: "Pachacuti", civilization: "Incan", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false},
	{name: "Ghandi", civilization: "Indian", paywall: "none", expansion: "none", banned: false},
	{name: "Chandragupta", civilization: "Indian", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false},
	{name: "Gitarja", civilization: "Indonesian", paywall: "Base Game DLC", expansion: "none", banned: false},
	{name: "Hojo Tokimune", civilization: "Japanese", paywall: "none", expansion: "none", banned: false},
	{name: "Jayavarman VII", civilization: "Khmer", paywall: "Base Game DLC", expansion: "none", banned: false},
	{name: "Mvemba a Nzinga", civilization: "Kongolese", paywall: "none", expansion: "none", banned: false},
	{name: "Seondeok", civilization: "Korean", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false},
	{name: "Alexander", civilization: "Macedonian", paywall: "Base Game DLC", expansion: "none", banned: false},
	{name: "Mansa Musa", civilization: "Mali", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false},
	{name: "Kupe", civilization: "Māori", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false},
	{name: "Lautaro", civilization: "Mapuche", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false},
	{name: "Lady Six Sky", civilization: "Mayan", paywall: "Frontier Pass", expansion: "none", banned: false},
	{name: "Genghis Khan", civilization: "Mongolian", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false},
	{name: "Harald Hardrada", civilization: "Norwegian", paywall: "none", expansion: "none", banned: false},
	{name: "Amanitore", civilization: "Nubian", paywall: "Base Game DLC", expansion: "none", banned: false},
	{name: "Suleiman", civilization: "Ottoman", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false},
	{name: "Cyrus", civilization: "Persian", paywall: "Base Game DLC", expansion: "none", banned: false},
	{name: "Dido", civilization: "Phoenician", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false},
	{name: "Jadwiga", civilization: "Polish", paywall: "Base Game DLC", expansion: "none", banned: false},
	{name: "Trajan", civilization: "Roman", paywall: "none", expansion: "none", banned: false},
	{name: "Peter", civilization: "Russian", paywall: "none", expansion: "none", banned: false},
	{name: "Robert the Bruce", civilization: "Scottish", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false},
	{name: "Tomyris", civilization: "Scythian", paywall: "none", expansion: "none", banned: false},
	{name: "Philip II", civilization: "Spanish", paywall: "none", expansion: "none", banned: false},
	{name: "Gilgamesh", civilization: "Sumerian", paywall: "none", expansion: "none", banned: false},
	{name: "Kristina", civilization: "Swedish", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false},
	{name: "Shaka", civilization: "Zulu", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false},
];

// returns value of selected expansion (game type) radio button
function selectedExpansion() {
	// find checked expansion for game
	let expansion = "none";
	if (document.getElementById("riseAndFallRadio").checked) {
		expansion = "Rise and Fall";
	}
	else if (document.getElementById("gatheringStormRadio").checked) {
		expansion = "Gathering Storm";
	}
	return expansion;
}

// generate banned leaders checkboxes depending on which gamemode is selected
function updateBannedLeaders() {
	let bannedLeadersEl = document.getElementById("bannedLeadersList");
	// reset contents
	bannedLeadersEl.innerHTML = "";
	// find allowed leaders from expansion
	let expansion = selectedExpansion();
	// repopulate
	for (let i = 0; i < leaders.length; i++) {
		if (leaders[i].expansion == "Rise and Fall" && expansion == "none") {
			// leader not allowed in mode so has no checkbox
		}
		else if (leaders[i].expansion == "Gathering Storm" && (expansion == "none" || expansion == "Rise and Fall")) {
			// leader not allowed in mode so has no checkbox
		}
		else {
			// leader allowed
			let leaderString = leaders[i].name+" ("+leaders[i].civilization+")"; // string used to identify leader
			// checkbox
			let checkboxNode = document.createElement("input");
			checkboxNode.type = "checkbox";
			checkboxNode.id = "banCheckbox"+i;
			checkboxNode.className = "banCheckbox";
			checkboxNode.value = leaderString;
			bannedLeadersEl.appendChild(checkboxNode);
			// label
			let labelNode = document.createElement("label");
			labelNode.htmlFor = "banCheckbox"+i;
			labelNode.innerText = leaderString;
			bannedLeadersEl.appendChild(labelNode);  
			// br
			let breakNode = document.createElement("br");
			bannedLeadersEl.appendChild(breakNode);
			// check if it should be banned by default
			if (leaders[i].banned) {
				document.getElementById("banCheckbox"+i).checked = true;
			}
		}
	}
}
// call on page init
updateBannedLeaders();

// number of players and number of leaders has been chosen
function playersSelected() {
	let playerListEl = document.getElementById("playerList");
	playerListEl.innerHTML = "";
	for (let i = 1; i <= parseInt(document.getElementById("numberOfPlayers").value); i++) {
		playerListEl.innerHTML += "<li id='player"+i+"'>Player "+i;
		// dlc select dropdown
		playerListEl.innerHTML += "<select id='dlcPlayer"+i+"'><option value='none'>No DLC Leaders</option><option value='Base Game DLC'>Platinum Edition Leaders</option><option value='Frontier Pass'>Platinum Edition + Frontier Pass Leaders</option></select><br>"
		// player leader holder
		playerListEl.innerHTML += "<div id='leadersPlayer"+i+"'></div></li><br><br>";
	}
	
	// show draft button
	document.getElementById("draftButton").hidden = false;
}

// player dlc preferences have also been chosen - draft leaders
function draft() {
	let offeredLeaders = []; // list of leaders that have already been offered
	
	// find checked expansion for game
	let expansion = selectedExpansion();
	
	// get banned leader checkboxes, as an array (not an HTMLCollection)
	let bannedLeaderEls = [...document.getElementsByClassName("banCheckbox")];
	
	for (let player = 1; player <= parseInt(document.getElementById("numberOfPlayers").value); player++) {
		// find dlc prefernce for player
		let playerPaywall = document.getElementById("dlcPlayer"+player).value;
		
		// clear previously drafted leaders for player (if there were any)
		document.getElementById("leadersPlayer"+player).innerHTML = "";
		
		for (let i = 1; i <= parseInt(document.getElementById("numberOfLeaders").value); i++) {
			// filter to only include valid leaders
			let leadersPool = leaders.filter(leader => {
				// check leader expansion
				if (leader.expansion == "Rise and Fall" && expansion == "none") {
					return false;
				}
				if (leader.expansion == "Gathering Storm" && (expansion == "none" || expansion == "Rise and Fall")) {
					return false;
				}
				
				// check leader paywall
				if ((leader.paywall == "Base Game DLC" || leader.paywall == "Frontier Pass") && playerPaywall == "none") {
					return false;
				}
				if (leader.paywall == "Frontier Pass" && playerPaywall == "Base Game DLC") {
					return false;
				}
				
				// check if leader is banned
				if (bannedLeaderEls.findIndex(leaderCheckbox => leaderCheckbox.value == leader.name+" ("+leader.civilization+")" && leaderCheckbox.checked) != -1) {
					return false;
				}
				
				// check if leader has already been picked
				// tbd extra settings :)
				if (offeredLeaders.findIndex(offeredLeader => offeredLeader.name == leader.name || offeredLeader.civilization == leader.civilization) != -1) {
					return false;
				}
				
				return true;
			});
			
			// pick random from leaders pool
			let draftedLeader = leadersPool[getRandomInt(0, leadersPool.length-1)];
			if (typeof draftedLeader == "undefined") {
				document.getElementById("leadersPlayer"+player).innerHTML += "Not enough available leaders<br>";
			}
			else {
				offeredLeaders.push(draftedLeader);
				// show leader to player
				document.getElementById("leadersPlayer"+player).innerHTML += draftedLeader.name + " (" + draftedLeader.civilization + ")<br>";
			}
		}
	}
}

// inclusive
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
