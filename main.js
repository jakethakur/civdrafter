let leaders = [
	{name: "Alexander", civilization: "Macedonian", paywall: "Base Game DLC", expansion: "none", banned: false, img:"Alexander.png"},
	{name: "Amanitore", civilization: "Nubian", paywall: "Base Game DLC", expansion: "none", banned: false, img:"Amanitore.png"},
	{name: "Ambiorix", civilization: "Gallic", paywall: "Frontier Pass", expansion: "none", banned: false, img:"Ambiorix.png"},
	{name: "Basil II", civilization: "Byzantine", paywall: "Frontier Pass", expansion: "none", banned: false, img:"Basil_II.png"},
	{name: "Catherine de Medici (Black Queen)", civilization: "French", paywall: "none", expansion: "none", banned: false, img:"Catherine.png"},
	{name: "Catherine de Medici (Magnificence)", civilization: "French", paywall: "Frontier Pass", expansion: "none", banned: false, img:"Catherine_Magnificence.png"},
	{name: "Chandragupta", civilization: "Indian", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img:"Chandragupta.png"},
	{name: "Cleopatra", civilization: "Egyptian", paywall: "none", expansion: "none", banned: false, img:"Cleopatra.png"},
	{name: "Cyrus", civilization: "Persian", paywall: "Base Game DLC", expansion: "none", banned: false, img:"Cyrus.png"},
	{name: "Dido", civilization: "Phoenician", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img:"Dido.png"},
	{name: "Eleanor of Aquitaine", civilization: "English", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img:"Eleanor_English.png"},
	{name: "Eleanor of Aquitaine", civilization: "French", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img:"Eleanor_French.png"},
	{name: "Frederick Barbarossa", civilization: "German", paywall: "none", expansion: "none", banned: false, img:"Frederick.png"},
	{name: "Gandhi", civilization: "Indian", paywall: "none", expansion: "none", banned: false, img:"Gandhi.png"},
	{name: "Genghis Khan", civilization: "Mongolian", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img:"Genghis_Khan.png"},
	{name: "Gilgamesh", civilization: "Sumerian", paywall: "none", expansion: "none", banned: false, img:"Gilgamesh.png"},
	{name: "Gitarja", civilization: "Indonesian", paywall: "Base Game DLC", expansion: "none", banned: false, img:"Gitarja.png"},
	{name: "Gorgo", civilization: "Greek", paywall: "none", expansion: "none", banned: false, img:"Gorgo.png"},
	{name: "Harald Hardrada", civilization: "Norwegian", paywall: "none", expansion: "none", banned: false, img:"Harald.png"},
	{name: "Hojo Tokimune", civilization: "Japanese", paywall: "none", expansion: "none", banned: false, img:"Hojo.png"},
	{name: "Jadwiga", civilization: "Polish", paywall: "Base Game DLC", expansion: "none", banned: false, img:"Jadwiga.png"},
	{name: "Jayavarman VII", civilization: "Khmer", paywall: "Base Game DLC", expansion: "none", banned: false, img:"Jayavarman_VII.png"},
	{name: "John Curtin", civilization: "Australian", paywall: "Base Game DLC", expansion: "none", banned: false, img:"John_Curtin.png"},
	{name: "Kristina", civilization: "Swedish", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img:"Kristina.png"},
	{name: "Kupe", civilization: "Māori", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img:"Kupe.png"},
	{name: "Lady Six Sky", civilization: "Mayan", paywall: "Frontier Pass", expansion: "none", banned: false, img:"Lady_Six_Sky.png"},
	{name: "Lautaro", civilization: "Mapuche", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img:"Lautaro.png"},
	{name: "Mansa Musa", civilization: "Mali", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img:"Mansa_Musa.png"},
	{name: "Matthias Corvinus", civilization: "Hungarian", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img:"Matthias_Corvinus.png"},
	{name: "Menelik II", civilization: "Ethiopian", paywall: "Frontier Pass", expansion: "none", banned: false, img:"Menelik_II.png"},
	{name: "Montezuma", civilization: "Aztec", paywall: "none", expansion: "none", banned: false, img:"Montezuma.png"},
	{name: "Mvemba a Nzinga", civilization: "Kongolese", paywall: "none", expansion: "none", banned: false, img:"Mvemba.png"},
	{name: "Pachacuti", civilization: "Incan", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img:"Pachacuti.png"},
	{name: "Pedro II", civilization: "Brazillian", paywall: "none", expansion: "none", banned: false, img:"Pedro_II.png"},
	{name: "Pericles", civilization: "Greek", paywall: "none", expansion: "none", banned: false, img:"Pericles.png"},
	{name: "Peter", civilization: "Russian", paywall: "none", expansion: "none", banned: false, img:"Peter.png"},
	{name: "Philip II", civilization: "Spanish", paywall: "none", expansion: "none", banned: false, img:"Philip_II.png"},
	{name: "Poundmaker", civilization: "Cree", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img:"Poundmaker.png"},
	{name: "Qin Shi Huang", civilization: "Chinese", paywall: "none", expansion: "none", banned: false, img:"Qin_Shi_Huang.png"},
	{name: "Robert the Bruce", civilization: "Scottish", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img:"Robert_the_Bruce.png"},
	{name: "Saladin", civilization: "Arabian", paywall: "none", expansion: "none", banned: false, img:"Saladin.png"},
	{name: "Seondeok", civilization: "Korean", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img:"Seondeok.png"},
	{name: "Shaka", civilization: "Zulu", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img:"Shaka.png"},
	{name: "Simón Bolívar", civilization: "Gran Colombian", paywall: "Frontier Pass", expansion: "none", banned: false, img:"Simón_Bolívar.png"},
	{name: "Suleiman", civilization: "Ottoman", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img:"Suleiman.png"},
	{name: "Tamar", civilization: "Georgian", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img:"Tamar.png"},
	{name: "Teddy Roosevelt (Bull Moose)", civilization: "American", paywall: "none", expansion: "none", banned: false, img:"Teddy.png"},
	{name: "Teddy Roosevelt (Rough Rider)", civilization: "American", paywall: "Frontier Pass", expansion: "none", banned: false, img:"Teddy_Rough_Rider.png"},
	{name: "Tomyris", civilization: "Scythian", paywall: "none", expansion: "none", banned: false, img:"Tomyris.png"},
	{name: "Trajan", civilization: "Roman", paywall: "none", expansion: "none", banned: false, img:"Trajan.png"},
	{name: "Victoria", civilization: "English", paywall: "none", expansion: "none", banned: false, img:"Victoria.png"},
	{name: "Wilfrid Laurier", civilization: "Canadian", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img:"Wilfrid.png"},
	{name: "Wilhelmina", civilization: "Dutch", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img:"Wilhelmina.png"},
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
			let leaderString = leaders[i].name+" ["+leaders[i].civilization+"]"; // string used to identify leader
			// checkbox
			let checkboxNode = document.createElement("input");
			checkboxNode.type = "checkbox";
			checkboxNode.id = "banCheckbox"+i;
			checkboxNode.className = "banCheckbox";
			checkboxNode.value = leaderString;
			bannedLeadersEl.appendChild(checkboxNode);
			// img
			bannedLeadersEl.innerHTML+="<img src='icons/"+leaders[i].img+"' class='leaderIcon'>";
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
				if (bannedLeaderEls.findIndex(leaderCheckbox => leaderCheckbox.value == leader.name+" ["+leader.civilization+"]" && leaderCheckbox.checked) != -1) {
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
				document.getElementById("leadersPlayer"+player).innerHTML += "<img src='icons/"+draftedLeader.img+"' class='leaderIcon'>" + draftedLeader.name + " [" + draftedLeader.civilization + "]<br>";
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
