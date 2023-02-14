let leaders = [
	{name: "Abraham Lincoln", civilization: "American", paywall: "Leader Pass", expansion: "none", banned: false, img:"9/97/Abraham_Lincoln_(Civ6).png"},
	{name: "Alexander", civilization: "Macedonian", paywall: "Base Game DLC", expansion: "none", banned: false, img:"3/33/Alexander_(Civ6).png"},
	{name: "Amanitore", civilization: "Nubian", paywall: "Base Game DLC", expansion: "none", banned: false, img:"b/b8/Amanitore_(Civ6).png"},
	{name: "Ambiorix", civilization: "Gallic", paywall: "Frontier Pass", expansion: "none", banned: false, img:"8/8c/Ambiorix_(Civ6).png"},
	{name: "Bà Triệu", civilization: "Vietnamese", paywall: "Frontier Pass", expansion: "none", banned: false, img:"9/92/Bà_Triệu_(Civ6).png"},
	{name: "Basil II", civilization: "Byzantine", paywall: "Frontier Pass", expansion: "none", banned: false, img:"9/96/Basil_II_(Civ6).png"},
	{name: "Catherine de Medici (Black Queen)", civilization: "French", paywall: "none", expansion: "none", banned: false, img:"0/06/Catherine_de_Medici_(Civ6).png"},
	{name: "Catherine de Medici (Magnificence)", civilization: "French", paywall: "Frontier Pass", expansion: "none", banned: false, img:"e/e2/Catherine_de_Medici_%28Magnificence%29_%28Civ6%29.png"},
	{name: "Chandragupta", civilization: "Indian", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img:"e/e2/Chandragupta_(Civ6).png"},
	{name: "Cleopatra", civilization: "Egyptian", paywall: "none", expansion: "none", banned: false, img:"9/98/Cleopatra_(Civ6).png"},
	{name: "Cyrus", civilization: "Persian", paywall: "Base Game DLC", expansion: "none", banned: false, img:"1/14/Cyrus_(Civ6).png"},
	{name: "Dido", civilization: "Phoenician", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img:"c/cb/Dido_(Civ6).png"},
	{name: "Eleanor of Aquitaine", civilization: "English", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img:"2/2f/Eleanor_of_Aquitaine_(English)_(Civ6).png"},
	{name: "Eleanor of Aquitaine", civilization: "French", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img:"7/7a/Eleanor_of_Aquitaine_%28French%29_%28Civ6%29.png"},
	{name: "Frederick Barbarossa", civilization: "German", paywall: "none", expansion: "none", banned: false, img:"4/44/Frederick_Barbarossa_%28Civ6%29.png"},
	{name: "Gandhi", civilization: "Indian", paywall: "none", expansion: "none", banned: false, img:"2/29/Gandhi_%28Civ6%29.png"},
	{name: "Genghis Khan", civilization: "Mongolian", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img:"5/53/Genghis_Khan_%28Civ6%29.png"},
	{name: "Gilgamesh", civilization: "Sumerian", paywall: "none", expansion: "none", banned: false, img:"f/ff/Gilgamesh_%28Civ6%29.png"},
	{name: "Gitarja", civilization: "Indonesian", paywall: "Base Game DLC", expansion: "none", banned: false, img:"e/e8/Gitarja_%28Civ6%29.png"},
	{name: "Gorgo", civilization: "Greek", paywall: "none", expansion: "none", banned: false, img:"6/68/Gorgo_%28Civ6%29.png"},
	{name: "Hammurabi", civilization: "Babylonian", paywall: "Frontier Pass", expansion: "none", banned: false, img:"9/94/Hammurabi_%28Civ6%29.png"},
	{name: "Harald Hardrada", civilization: "Norwegian", paywall: "none", expansion: "none", banned: false, img:"7/77/Harald_Hardrada_%28Civ6%29.png"},
	{name: "Hojo Tokimune", civilization: "Japanese", paywall: "none", expansion: "none", banned: false, img:"0/07/Hojo_Tokimune_%28Civ6%29.png"},
	{name: "Jadwiga", civilization: "Polish", paywall: "Base Game DLC", expansion: "none", banned: false, img:"f/f6/Jadwiga_%28Civ6%29.png"},
	{name: "Jayavarman VII", civilization: "Khmer", paywall: "Base Game DLC", expansion: "none", banned: false, img:"7/77/Jayavarman_VII_%28Civ6%29.png"},
	{name: "João III", civilization: "Portuguese", paywall: "Frontier Pass", expansion: "none", banned: false, img:"3/3e/João_III_%28Civ6%29.png"},
	{name: "John Curtin", civilization: "Australian", paywall: "Base Game DLC", expansion: "none", banned: false, img:"b/b9/John_Curtin_%28Civ6%29.png"},
	{name: "Julius Caesar", civilization: "Roman", paywall: "none", expansion: "none", banned: false, img:"4/4c/Julius_Caesar_%28Civ6%29.png"},
	{name: "Kristina", civilization: "Swedish", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img:"3/32/Kristina_%28Civ6%29.png"},
	{name: "Kublai Khan", civilization: "Chinese", paywall: "Frotier Pass", expansion: "none", banned: false, img:"5/54/Kublai_Khan_%28Chinese%29_%28Civ6%29.png"},
	{name: "Kublai Khan", civilization: "Mongolian", paywall: "Frotier Pass", expansion: "none", banned: false, img:"c/cb/Kublai_Khan_%28Mongolian%29_%28Civ6%29.png"},
	{name: "Kupe", civilization: "Māori", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img:"4/42/Kupe_%28Civ6%29.png"},
	{name: "Lady Six Sky", civilization: "Mayan", paywall: "Frontier Pass", expansion: "none", banned: false, img:"7/77/Lady_Six_Sky_%28Civ6%29.png"},
	{name: "Lautaro", civilization: "Mapuche", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img:"e/e0/Lautaro_%28Civ6%29.png"},
	{name: "Mansa Musa", civilization: "Mali", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img:"7/70/Mansa_Musa_%28Civ6%29.png"},
	{name: "Matthias Corvinus", civilization: "Hungarian", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img:"2/25/Matthias_Corvinus_%28Civ6%29.png"},
	{name: "Menelik II", civilization: "Ethiopian", paywall: "Frontier Pass", expansion: "none", banned: false, img:"9/97/Menelik_II_%28Civ6%29.png"},
	{name: "Montezuma", civilization: "Aztec", paywall: "none", expansion: "none", banned: false, img:"1/1e/Montezuma_%28Civ6%29.png"},
	{name: "Mvemba a Nzinga", civilization: "Kongolese", paywall: "none", expansion: "none", banned: false, img:"6/68/Mvemba_a_Nzinga_%28Civ6%29.png"},
	{name: "Nader Shah", civilization: "Persian", paywall: "Leader Pass", expansion: "none", banned: false, img:"e/ec/Nader_Shah_%28Civ6%29.png"},
	{name: "Nzinga Mbande", civilization: "Kongo", paywall: "Leader Pass", expansion: "none", banned: false, img:"6/6a/Nzinga_Mbande_%28Civ6%29.png"},
	{name: "Pachacuti", civilization: "Incan", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img:"f/f2/Pachacuti_%28Civ6%29.png"},
	{name: "Pedro II", civilization: "Brazillian", paywall: "none", expansion: "none", banned: false, img:"7/7c/Pedro_II_%28Civ6%29.png"},
	{name: "Pericles", civilization: "Greek", paywall: "none", expansion: "none", banned: false, img:"4/40/Pericles_%28Civ6%29.png"},
	{name: "Peter", civilization: "Russian", paywall: "none", expansion: "none", banned: false, img:"8/80/Peter_%28Civ6%29.png"},
	{name: "Philip II", civilization: "Spanish", paywall: "none", expansion: "none", banned: false, img:"5/59/Philip_II_%28Civ6%29.png"},
	{name: "Poundmaker", civilization: "Cree", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img:"3/3b/Poundmaker_%28Civ6%29.png"},
	{name: "Qin Shi Huang (Mandate of Heaven)", civilization: "Chinese", paywall: "none", expansion: "none", banned: false, img:"c/c3/Qin_Shi_Huang_%28Civ6%29.png"},
	{name: "Qin Shi Huang (Unifier)", civilization: "Chinese", paywall: "Leader Pass", expansion: "none", banned: false, img:"0/00/Qin_Shi_Huang_%28Unifier%29_%28Civ6%29.png"},
	{name: "Robert the Bruce", civilization: "Scottish", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img:"c/c4/Robert_the_Bruce_%28Civ6%29.png"},
	{name: "Saladin (Sultan)", civilization: "Arabian", paywall: "Leader Pass", expansion: "none", banned: false, img:"8/82/Saladin_%28Sultan%29_%28Civ6%29.png"},
	{name: "Saladin (Vizier)", civilization: "Arabian", paywall: "none", expansion: "none", banned: false, img:"5/57/Saladin_%28Civ6%29.png"},
	{name: "Seondeok", civilization: "Korean", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img:"9/9c/Seondeok_%28Civ6%29.png"},
	{name: "Shaka", civilization: "Zulu", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img:"e/eb/Shaka_%28Civ6%29.png"},
	{name: "Simón Bolívar", civilization: "Gran Colombian", paywall: "Frontier Pass", expansion: "none", banned: false, img:"9/9d/Simón_Bolívar_%28Civ6%29.png"},
	{name: "Suleiman (Kanuni)", civilization: "Ottoman", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img:"8/85/Suleiman_%28Civ6%29.png"},
	{name: "Suleiman (Muhtesem)", civilization: "Ottoman", paywall: "Leader Pass", expansion: "none", banned: false, img:"d/d0/Suleiman_%28Muhteşem%29_%28Civ6%29.png"},
	{name: "Tamar", civilization: "Georgian", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img:"b/b0/Tamar_%28Civ6%29.png"},
	{name: "Teddy Roosevelt (Bull Moose)", civilization: "American", paywall: "none", expansion: "none", banned: false, img:"7/70/Teddy_Roosevelt_%28Civ6%29.png"},
	{name: "Teddy Roosevelt (Rough Rider)", civilization: "American", paywall: "Frontier Pass", expansion: "none", banned: false, img:"c/c3/Teddy_Roosevelt_%28Rough_Rider%29_%28Civ6%29.png"},
	{name: "Tokugawa", civilization: "Japanese", paywall: "Leader Pass", expansion: "none", banned: false, img:"a/af/Tokugawa_%28Civ6%29.png"},
	{name: "Tomyris", civilization: "Scythian", paywall: "none", expansion: "none", banned: false, img:"6/6a/Tomyris_%28Civ6%29.png"},
	{name: "Trajan", civilization: "Roman", paywall: "none", expansion: "none", banned: false, img:"d/d5/Trajan_%28Civ6%29.png"},
	{name: "Victoria", civilization: "English", paywall: "none", expansion: "none", banned: false, img:"5/53/Victoria_%28Civ6%29.png"},
	{name: "Wilfrid Laurier", civilization: "Canadian", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img:"b/b0/Wilfrid_Laurier_%28Civ6%29.png"},
	{name: "Wilhelmina", civilization: "Dutch", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img:"4/44/Wilhelmina_%28Civ6%29.png"},
	{name: "Wu Zetian", civilization: "Chinese", paywall: "Leader Pass", expansion: "none", banned: false, img:"7/76/Wu_Zetian_%28Civ6%29.png"},
	{name: "Yongle", civilization: "Chinese", paywall: "Leader Pass", expansion: "none", banned: false, img:"5/5a/Yongle_%28Civ6%29.png"},
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
			bannedLeadersEl.innerHTML+="<img src='https://static.wikia.nocookie.net/civilization/images/"+leaders[i].img+"' class='leaderIcon'>";
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
		playerListEl.innerHTML += "<select id='dlcPlayer"+i+"'><option value='none'>No DLC Leaders</option><option value='Base Game DLC'>Platinum Edition Leaders</option><option value='Frontier Pass'>Platinum Edition + Frontier Pass Leaders</option><option value='Leader Pass'>Platinum Edition + Frontier Pass Leaders + Leader Pass</option></select><br>"
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
				if ((leader.paywall == "Base Game DLC" || leader.paywall == "Frontier Pass" || leader.paywall == "Leader Pass") && playerPaywall == "none") {
					return false;
				}
				if (leader.paywall == "Frontier Pass" && playerPaywall == "Base Game DLC") {
					return false;
				}
				if (leader.paywall == "Leader Pass" && playerPaywall == "Frontier Pass") {
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
				document.getElementById("leadersPlayer"+player).innerHTML += "<img src='https://static.wikia.nocookie.net/civilization/images/"+draftedLeader.img+"' class='leaderIcon'>" + draftedLeader.name + " [" + draftedLeader.civilization + "]<br>";
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

// On page load set the theme.
(function() {
  let onpageLoad = localStorage.getItem("theme") || "";
  let element = document.body;
  element.classList.add(onpageLoad);
  document.getElementById("theme").textContent =
    localStorage.getItem("theme") || "light";
})();

function themeToggle() {
  let element = document.body;
  element.classList.toggle("dark-mode");

  let theme = localStorage.getItem("theme");
  if (theme && theme === "dark-mode") {
    localStorage.setItem("theme", "");
  } else {
    localStorage.setItem("theme", "dark-mode");
  }

  document.getElementById("theme").textContent = localStorage.getItem("theme");
}
