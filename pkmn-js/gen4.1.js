// gen4.1.js
// File for TPP HeartGold events
//

//showGameClock("TPP HeartGold Game Clock<br/>", new Date(Date.UTC(2014, 05-1, 24, 0+4)));

addEvent(new Pokemon({
	name: "Vibrava",
	sprite: "img/pkmn/trumpnich.png",
	x: 13, y: -22,
	
	dex: "img/pkdx/b/Spr_4d_329.png",
	sources: {
		"Sprite from Bulbapedia": "",
		"Pokedex Image from Bulbapedia": "",
	},
	
	OT: "aoooo",
	gender: 2,
	gamename: ",",
	pokename: "Vibrava",
	nicknames: "Trumprava, Vibrator, Trumpnich, MC Hammer",
	caught: "Received at 0d 0h 6m.",
	level: 86,
	ball: "poke",
	memo: "Known for its signature moves: Trump Card and Hammer Arm (the latter of which it had since the beginning).",
	
	ribbons: [
		new Starter_Ribbon(),
		new HallOfFame_Ribbon("11d 9h 9m"),
		new HallOfFame_Ribbon("16d 12h 56m (Rematch)"),
	],
}).forOccasion("100club", {
	x: -21, y: -5,
	adj_x: -4,
	adj_flip:true,
}));

addEvent(new MultiEvent({
	name: "Ice Cream Stand",
	sprite: "img/pkmn/zigzag_lard_helix.gif",
	x: 1, y: 36,
	adj_x: -4,
	
}).addSubEvent("1,34,30,62", new Pokemon({
	name: "Lard Helix",
	sprite: "img/pkmn/lard_helix.png",
	x: -19, y: 20,
	
	dex: "img/pkdx/hgdex_helix.png",
	sources: {
		"Sprite by /u/carlotta4th": "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/",
		"Pokedex Image by /u/carlotta4th": "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/",
	},
	
	OT: "aoooo",
	gender: 1,
	gamename: "Omastar",
	pokename: "Omastar",
	nicknames: "Lore Helix",
	caught: "In the harbor of Vermilion City, 11d 17h 56m",
	level: 100,
	ball: "quick",
	memo: "Ability: Thick Fat. He is, lore-wise, the same Lord Helix as was revived by Red, after lazing around, eating cheeseburgers for 4.5 generations.",
	
	ribbons: [
		new HallOfFame_Ribbon("16d 12h 56m (Rematch)"),
		new Record_Ribbon("Second Lvl 100 Pokemon"),
	],
})).addSubEvent("27,26,46,40", new Pokemon({
	name : "Trizagoon",
	sprite: "img/pkmn/agent_zigzagoon.png",
	x: 7, y: -30,
	
	dex : "img/pkdx/frdex_zigzagoon.png",
	sources : {
		"Pokedex Image from /u/Kelcyus's Twitch Pokedex Project" : "http://www.reddit.com/r/twitchplayspokemon/comments/25gcrh/twitch_pokedex_205_entries/",
	},
	
	OT: "Alice",
	gender: 1,
	gamename : "Zigzagoon",
	pokename : "Zigzagoon",
	nicknames : "Special Agent Zigzagoon",
	level : 33,
	memo : "Agent of Bill. Immensely incompetent. But knew Tri Attack.",
	
	ribbons : [
		new Released_Ribbon("0d 6h 1m"),
		new Record_Ribbon("Only Release in TPP FireRed"),
	],
}))
);

addEvent(new Pokemon({
	skipme: true,
	name: "Treesus",
	sprite: "img/pkmn/.png",
	x: 0, y: 0,
	
	dex: "img/pkdx/",
	sources: {
		"Sprite by /u/": "",
		"Pokedex Image by /u/": "",
	},
	
	OT: "aoooo",
	gender: 1,
	gamename: "A",
	pokename: "Sudowoodo",
	nicknames: "Rock Wreaker",
	caught: "As a Bonsley.",
	level: 80,
	ball: "net",
	memo: "Ability: Sniper. Holds: Scope Lens. Known for its Rock Wrecker attack and its Sniper ability. Knows Surf. <p>Named Treesus after a Sudowoodo in Stadium Mimic'ed the attack Fly.</p>",
	
	ribbons: [
		new HallOfFame_Ribbon("11d 9h 9m"),
		new HallOfFame_Ribbon("16d 12h 56m (Rematch)"),
	],
}));

addEvent(new Pokemon({
	name: "The Oracle",
	sprite: "img/pkmn/shiny-xatu.gif",
	x: -39, y: -12,
	
	dex: "img/pkdx/hgdex_xatu.png",
	sources: {
		"Sprite by /u/": "",
		"Pokedex Image by /u/carlotta4th": "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/",
	},
	
	OT: "aoooo",
	gender: 2,
	gamename: "xrr&#9794; &#9830;",
	pokename: "Xatu",
	nicknames: "Stare Jesus",
	caught: "In the Lake of Rage, 4d 3h 13m",
	level: 100,
	ball: "poke",
	memo: "Ability: Hustle. Was the 'Red Gyrados' in the Lake of Rage.",
	
	ribbons: [
		new Record_Ribbon("First Shiny Caught"),
		new HallOfFame_Ribbon("11d 9h 9m"),
		new HallOfFame_Ribbon("16d 12h 56m (Rematch)"),
		new Record_Ribbon("Third Lvl 100 Pokemon"),
	],
}).forOccasion("100club", {
	x: 11, y: -26,
	adj_flip: true,
}));

addEvent(new MultiEvent({
	name: "Armor and Skull Sparring",
	sprite: "img/pkmn/armor_skull_battle.gif",
	x: 32, y: 24,
	
}).addSubEvent("0,0,35,31", new Pokemon({
	name: "Lord Armor",
	sprite: "img/pkmn/!deity_shield_pkmn.png",
	x: -151, y:-74, z: 8,
	
	dex: "img/pkdx/hgdex_sheild.png",
	sources: {
		"Sprite by /u/carlotta4th": "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/",
		"Pokedex Image by /u/carlotta4th": "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/",
	},
	
	OT: "aoooo",
	gender: 1,
	gamename: "Bastiodon",
	pokename: "Bastiodon",
	caught: "8d 22h 25m",
	level: 89,
	ball: "ultra",
	memo: "Ability: Soundproof.",
	
	ribbons: [
		new HallOfFame_Ribbon("11d 9h 9m"),
		new HallOfFame_Ribbon("16d 12h 56m (Rematch)"),
	],
})).addSubEvent("35,0,68,31", new Pokemon({
	name: "Lord Skull",
	sprite: "img/pkmn/!deity_skull_pkmn.png",
	x: -139, y:-74, z: 8,
	
	dex: "img/pkdx/hgdex_skull.png",
	sources: {
		"Sprite by /u/carlotta4th": "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/",
		"Pokedex Image by /u/carlotta4th": "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/",
	},
	
	OT: "aoooo",
	gender: 1,
	gamename: "6 ♦'j",
	pokename: "Rampardos",
	nicknames: "Dino Ghost Rider",
	caught: "In Tin Tower, as Cranidos, 7d 6h 52m",
	level: 71,
	ball: "master",
	memo: "Ability: Flame Body. Alternate Nickname comes from the idea of a flaming skull.",
	
	ribbons: [
		new Master_Ribbon(),
		new HallOfFame_Ribbon("11d 9h 9m"),
		new HallOfFame_Ribbon("16d 12h 56m (Rematch)"),
	],
}))
);

;

;

addEvent(new Pokemon({
	skipme: true,
	name: "Diglight",
	sprite: "img/pkmn/.png",
	x: 0, y: 0,
	
	dex: "img/pkdx/",
	sources: {
		"Sprite by /u/": "",
		"Pokedex Image by /u/": "",
	},
	
	OT: "aoooo",
	gender: 2,
	gamename: "☺ ☀ ((GG6W",
	pokename: "Diglett",
	caught: "0d 5h 9m",
	level: 16,
	memo: "Ability: Multitype. Holds: Zap Plate. Unfortunately, this combination did not make her an electric type in game.",
	
	ribbons: [
	],
}));

addEvent(new Pokemon({
	skipme: true,
	name: "Isaac",
	sprite: "img/pkmn/.png",
	x: 0, y: 0,
	
	dex: "img/pkdx/",
	sources: {
		"Sprite by /u/": "",
		"Pokedex Image by /u/": "",
	},
	
	OT: "aoooo",
	gender: 1,
	gamename: "63AAIAACC!",
	pokename: "Jigglypuff",
	nicknames: "Dovakin",
	caught: "0d 2h 8m",
	level: 17,
	memo: "Ability: Run Away. Known as the Dragonborn for its Dragon Breath move.",
	
	ribbons: [
	],
}));

addEvent(new Pokemon({
	skipme: true,
	name: "Hackercat",
	sprite: "img/pkmn/.png",
	x: 0, y: 0,
	
	dex: "img/pkdx/",
	sources: {
		"Sprite by /u/": "",
		"Pokedex Image by /u/": "",
	},
	
	OT: "aoooo",
	gender: 2,
	gamename: "Skitty",
	pokename: "Skitty",
	nicknames: "Chairwoman",
	caught: "0d 16h 20m",
	level: 9,
	memo: "Ability: Download. It's common nickname comes from its Download ability.",
	
	ribbons: [
	],
}));

addEvent(new Pokemon({
	skipme: true,
	name: "Elsa",
	sprite: "img/pkmn/.png",
	x: 0, y: 0,
	
	dex: "img/pkdx/",
	sources: {
		"Sprite by /u/": "",
		"Pokedex Image by /u/": "",
	},
	
	OT: "aoooo",
	gender: 2,
	gamename: "Smoochum",
	pokename: "Smoochum",
	caught: "0d 16h 20m",
	level: 18,
	memo: "Ability: Unburden. Nickname is a reference to Disney's Frozen, which came to popularity during TPP.",
	
	ribbons: [
	],
}));

addEvent(new Pokemon({
	skipme: true,
	name: "Diamondback",
	sprite: "img/pkmn/diamondback.png",
	x: 0, y: 0,
	
	dex: "img/pkdx/",
	sources: {
		"Sprite by /u/": "",
		"Pokedex Image by /u/": "",
	},
	
	OT: "aoooo",
	gender: 1,
	gamename: "85G52&nbsp;&nbsp;2♦",
	pokename: "Ekans",
	caught: "Johto Safari Zone, 4d 21h 46m",
	level: 25,
	memo: "Ability: Battle Armor. It's nickname is a reference to the diamond at the end of its name and its ability.",
	
	ribbons: [
	],
}));

addEvent(new Pokemon({
	skipme: true,
	name: "3G",
	sprite: "img/pkmn/3g.png",
	x: 0, y: 0,
	
	dex: "img/pkdx/",
	sources: {
		"Sprite by /u/": "",
		"Pokedex Image by /u/": "",
	},
	
	OT: "aoooo",
	gender: 0,
	gamename: "&nbsp;3g001 1",
	pokename: "Larvitar",
	nicknames: "Egoo Raptor",
	caught: "3d 11h 36m",
	level: 31,
	memo: "Ability: Stench.",
	
	ribbons: [
	],
}));


addEvent(new Trainer({
	skipme: true,
	name : "aoooo",
	spritesheet : "img/trainers/.png",
	x: -9, y: 13,
	
	dex : "",
	sources : {
		"Lyra Sprite from Bulbapedia":"", 
	},
	
	idnum : "28412",
	nickname : "Aoooo",
	altnicks : "Aurora, Werewolf",
	playtime: "18d 20h 33m",
	pokedex : "125 own/436 seen",
	releasecount : 3,
	catchcount : 154,
	e4attempts : "26 (1st), 24 (2nd)",
	blackouts : "???",
	
	personality: 'Aoooo is a werewolf; she constantly glitched out during the game, drawing cries of "AOOOOOOOO!" from the chat. She is naive and likes catching more friends with the thousands of pokeballs she\'s bought.',
	notable: "",
	ribbons: [
		
	],
	
	// info_html : 
	// 	"Number of E4 Attempts: ??<br/>"+
	// 	"Times Blacked Out: ???<br/>"+
	// 	"<br/>"+
	// 	"<br/>"+
	// 	"",
	icons : [
		null, //"img/icn/coin_case.png",
		null, //"img/icn/air_mail.png",
		new Icon("poke_ball.png", "Aoooo far surpassed Napoleon in the number of pokeballs that she bought, and the number of pokemon she caught with them."),
		null, //"img/icn/shiny_stone.png",
		null, //"img/icn/contest_pass.png",
		null, //"img/icn/sun_stone.png",
	],
	
	behavior: null,
}));


//////////////////////////////////////////////////////////
//And Kenya, the most complicated pokemon in the park...
addEvent(new MovingPokemon({
	skipme: true,
	name: "Kenya",
	x: 0, y: 0,
	
	dex: "img/pkdx/hgdex_kenya.png",
	sources: {
		"Sprite by /u/carlotta4th": "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/",
		"Pokedex Image by /u/carlotta4th": "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/",
	},
	
	OT: "aoooo",
	gender: 0,
	gamename: "Kenya",
	pokename: "Groudon",
	level: 51,
	memo: 'Ability: Water Absorb. Was the "Spearow" given to the player to deliver mail. The Kenyan Wars, sometimes known as the Second Gator War, was fought over him.',
	
	ribbons: [
		new Released_Ribbon("6d 17h 53m"),
		new Traded_Ribbon("Gift from Webster 1d 14h 14m"),
		new Record_Ribbon("First Legendary Released"),
	],
	
	frame_width: 48,
	frame_height: 46,
	
	updateImage : function() {
		var x = -this.direction * this.frame_width;
		var y = -this.animFrame * this.frame_height;
		
		this.domImage.css({
			"background-position" : x+"px "+y+"px",
		});
	},
	
	
	behavior: function(){
		
	},
}));



