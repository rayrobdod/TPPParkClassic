// gen1.js
// File for TPP Red events
// 

// Bird Jesus and his Church of Helix
addEvent(new Building({
	name: "The Church of Helix",
	sprite: "img/bld/church.png",
	x : 8, y : 8,
	warp_x: 32, warp_y: 67,
}));

addEvent(new MultiEvent({
	name: "BJ and FP fight it out!",
	sprite: "img/pkmn/bird_jesus_flareon_argue.gif",
	x: 9, y : 10,
	
}).addSubEvent("39,12,73,56", new Pokemon({
	name: "Bird Jesus",
	animation: "floating",
	sprite: "img/pkmn/bird_jesus.gif",
	shadow : "img/pkmn/bird-jesus-shadow.png",
	x : 10, y : 8, z: 20,
	
	dex : "img/pkdx/tpp1_birdjesus.gif",
	sources : {
		"Pokedex Image by /u/Fiirewaffle" : "http://hamigakimomo.tumblr.com/post/77911455524/i-decided-to-make-custom-r-b-sprites-for-the",
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/1yx0gx/i_madealtered_flairs_suggestions_or_corrections/",
	},
		
	OT: "Red",
	gamename: "aaabaaaajss",
	pokename: "Pidgeot",
	level: 69,
	nicknames : "Abba Jesus",
	
	ribbons : [
		new HallOfFame_Ribbon("16d 7h 45m"),
	],
})).addSubEvent("11,33,34,55", new Pokemon({
	name: "Flareon",
	
	dex : "img/pkdx/tpp7_flareon.gif",
	sources : {
		"Pokedex Image by /u/Firewaffle" : "http://hamigakimomo.tumblr.com/post/78455477855/finally-did-a-jay-leno-and-cabbage-sprite",
	},
	
	OT: "Red",
	gamename : "Flareon",
	pokename : "Flareon",
	level : 25,
	nicknames: "The False Prophet",
	memo : "Known as the False Prophet for filling a party slot slated for Lapras and evolving neither into Jolteon or Vaporeon.",
	
	ribbons : [
		new Released_Ribbon("5d 17h 47m"),
	],	
}))
);

//
// Note: Lord Helix is attached to the Battle of Mt Silver multi-event defined
// in the Gen 2 file. See there for his event definition.
//

//
// Note: ATV is attached to the Dragonslayer Battle multi-event defined
// in the Gen 2 file. See there for his event definition.
//


addEvent(new MultiEvent({
	name : "B-Ball Game",
	sprite: "img/pkmn/bballgame.gif",
	x : -9, y : 38, z:-8,
}).addSubEvent("2,24,32,52", new Pokemon({
	name : "King Fonz",
	
	dex : "img/pkdx/tpp3_fonz.gif",
	sources : {
		"Pokedex Image by /u/Fiirewaffle" : "http://hamigakimomo.tumblr.com/post/77911455524/i-decided-to-make-custom-r-b-sprites-for-the",
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/1yx0gx/i_madealtered_flairs_suggestions_or_corrections/",
	},
		
	OT: "Red",
	gamename : "AAAAAAAAAA",
	pokename : "Nidoking",
	level : 54,
	memo : "Survived and entered party on Bloody Sunday",
	caught : "Caught in Safari Zone",
	ball : "safari",
	
	ribbons : [
		new HallOfFame_Ribbon("16d 7h 45m"),
	],	
})).addSubEvent("61,20,91,48", new Pokemon({
	name : "Air",
	
	dex : "img/pkdx/tpp6_air.gif",
	sources : {
		"Pokedex Image by /u/Fiirewaffle" : "http://hamigakimomo.tumblr.com/post/77911455524/i-decided-to-make-custom-r-b-sprites-for-the",
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/1yx0gx/i_madealtered_flairs_suggestions_or_corrections/",
	},
		
	OT: "Red",
	gamename : "AIIIIIIRRR",
	pokename : "Lapras",
	nicknames : "Air Jordan, Fresh Prince of Shell Air",
	level : 31,
	
	ribbons : [
		new HallOfFame_Ribbon("16d 7h 45m"),
	],	
})));

// Zapdos
addEvent(new Pokemon({
	name : "Battery Jesus",
	sprite: "img/pkmn/zapdos.png",
	x : -5, y : 0,
	
	dex : "img/pkdx/tpp5_zapdos.gif",
	sources : {
		"Pokedex Image by /u/Fiirewaffle" : "http://hamigakimomo.tumblr.com/post/77911455524/i-decided-to-make-custom-r-b-sprites-for-the",
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/1yx0gx/i_madealtered_flairs_suggestions_or_corrections/",
	},
		
	OT: "Red",
	gamename : "AA-j",
	pokename : "Zapdos",
	nicknames : "Double-A Jay, Archangel of Justice, John the Zaptist",
	level : 81,
	caught : "With Masterball 10d 7h 49m",
	ball : "master",
	memo : "Attempts at retrieval caused Bloody Sunday. Invaluable at Elite Four.",
	
	ribbons : [
		new HallOfFame_Ribbon("16d 7h 45m"),
		new Master_Ribbon(),
		new Record_Ribbon("First Legendary"),
	],	
}).forOccasion("bloodysunday", {
	x: -6, y: -5,
}));


//
// Note: Abby is attached to the Released Starter Campfire multi-event 
// defined in the "other" events file. See there for her event definition.
//

// DigRat
addEvent(new Pokemon({
	name: "DigRat",
	sprite: "img/pkmn/digrat.gif",
	x: 36, y: -1,
	animation: null,
	
	dex : "img/pkdx/tpp11_digrat.gif",
	sources : {
		"Pokedex Image by /u/Fiirewaffle" : "http://hamigakimomo.tumblr.com/post/78067393358/ive-updated-omanytes-sprite-to-omastar-i-also",
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/1yx0gx/i_madealtered_flairs_suggestions_or_corrections/",
	},
		
	OT: "Red",
	gamename : "AAJST(???",
	pokename : "Raticate",
	nicknames : "BigDig",
	level : 29,
	memo : "A trouble maker, known for digging us out of places we wanted to be.",
	
	ribbons : [
		new Released_Ribbon("10d 16h 2m"),
		new BloodySunday_Ribbon(),
	],
}).forOccasion("bloodysunday", {
	sprite: "img/pkmn/digrat.png",
	x: -21, y: -5,
	animation: "breathe",
	adj_flip: true,
}));

// DUX!
addEvent(new Pokemon({
	name : "DUX",
	sprite: "img/pkmn/dux.png",
	x: -35, y: 24,
	
	dex : "img/pkdx/tpp10_dux.gif",
	sources : {
		"Pokedex Image by /u/Fiirewaffle" : "http://hamigakimomo.tumblr.com/post/78067393358/ive-updated-omanytes-sprite-to-omastar-i-also",
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/1yx0gx/i_madealtered_flairs_suggestions_or_corrections/",
	},
		
	OT: "Red",
	gamename : "DUX",
	pokename : "Farfetch'd",
	level : 31,
	nicknames : '"The Slayer of Trees"',
	memo : "Known for its mighty Cut ability!",
	
	ribbons : [
		new Traded_Ribbon("For Spearow 2d 6h 59m"),
		new Released_Ribbon("10d 13h 13m"),
		new BloodySunday_Ribbon(),
	],
}).forOccasion("bloodysunday", {
	x: -21, y: -3,
	animation: "breathe",
	adj_flip: true,
}));

// Jay Leno!
addEvent(new Pokemon({
	name : "Jay Leno",
	sprite: "img/pkmn/jayleno.png",
	x: 4, y: -28,
	
	dex : "img/pkdx/tpp12_jayleno.gif",
	sources : {
		"Pokedex Image by /u/Firewaffle" : "http://hamigakimomo.tumblr.com/post/78455477855/finally-did-a-jay-leno-and-cabbage-sprite",
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/1yx0gx/i_madealtered_flairs_suggestions_or_corrections/",
	},
		
	OT: "Red",
	gamename : "JLVWNNOOOO",
	pokename : "Rattata",
	level : 13,
	memo : "The very first pokemon ever released.",
	
	ribbons : [
		new Released_Ribbon("4d 8h 50m"),
		new Record_Ribbon("First Pokemon TPP Released"),
	],
}).forOccasion("100club", {
	x: -21, y: -4,
	adj_x: -4,
}));

// Original Cabbage
addEvent(new Pokemon({
	name : "Cabbage",
	sprite: "img/pkmn/cabbage_grey.png",
	x: 8, y: -26,
	
	dex : "img/pkdx/tpp13_cabbage.gif",
	sources : {
		"Pokedex Image by /u/Firewaffle" : "http://hamigakimomo.tumblr.com/post/78455477855/finally-did-a-jay-leno-and-cabbage-sprite",
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/1yx0gx/i_madealtered_flairs_suggestions_or_corrections/",
	},
		
	OT: "Red",
	gamename : "x(araggbaj",
	pokename : "Gloom",
	level : 31,
	nicknames : "xCabbage, Seed of Hope",
	
	ribbons : [
		new Released_Ribbon("10d 12h 43m"),
		new BloodySunday_Ribbon(),
	],
}).forOccasion("bloodysunday", {
	x: -21, y: -1,
	animation: "breathe",
	adj_flip: true,
}).forOccasion("100club", {
	x: -29, y: -24,
}));


// The Keeper, keeping the Pokemon Center
addEvent(new Building({
	name: "Pokemon Center",
	sprite: "img/bld/pokecenter.png",
	x : -17, y : 12,
	warp_x: 28, warp_y: 58,
}));

addEvent(new Pokemon({
	name : "The Keeper",
	sprite: "img/pkmn/thekeeper.png",
	x: -17, y: 13,
	
	dex : "img/pkdx/tpp_keeper.png",
	sources : {
		"Pokedex Image from /u/Kelcyus's Twitch Pokedex Project" : "http://www.reddit.com/r/twitchplayspokemon/comments/25gcrh/twitch_pokedex_205_entries/",
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/1yx0gx/i_madealtered_flairs_suggestions_or_corrections/",
	},
		
	OT: "Red",
	gamename : "Drowzee",
	pokename : "Drowzee",
	level : 30,
	memo : "Keeper of the PC",
}).forOccasion("bloodysunday", {
	x: -8, y: -5,
	animation: "breathe",
}));

addEvent(new Building({
	name: "PC Power Cord",
	sprite: "img/bld/pc_power.png",
	x : -3, y : 1,
	warp_x: 208, warp_y: -2,
}));


// Rick Gastly (no h...)
addEvent(new Pokemon({
	name : "Rick Gastly",
	sprite: "img/pkmn/rickghastly.gif",
	x: 11, y: -34,
	animation: false,
	
	dex : "img/pkdx/b/Spr_1b_092.png", //Bulbapedia
	// sources : {
	// 	"Sprite by " : "",
	// },
	
	OT: "Red",
	gamename : "Gastly",
	pokename : "Gastly",
	level : function() {
		//Gastly left at 11d 1h 30m -- Feb 24th 03:11 UTC
		var timeSince = (new Date().getTime()) - (new Date(2014, 2, 24, 3, 11).getTime());
		//convert timeSince to seconds, and divide by estimated movement
		var expSince = (timeSince / 1000) * 0.1; //1 step per 10 seconds, with battling accounting for a lot
		
		// Medium Slow equation: EXP = (6/5)*n^3 - 15n^2 + 100n - 140;
		// Solve for n?? o_O   https://www.wolframalpha.com/input/?i=x+%3D+%286%2F5%29*y^3+-+15y^2+%2B+100y+-+140
		// Instead, let's just solve for a level and loop until we don't have enough exp to be that level
		
		// Start at level 50, since we know he was that if you pick him up in the save file.
		for (var i = 50; i < 256; i++) { //limit to level 255
			var exp = (6/5)*Math.pow(i, 3) - 15*i*i + 100*i - 140;
			if (expSince <= exp) return i-1; //Found a level!
		}
		return "255+";
	},
	memo : "Left at the Kanto Daycare at Level 23. Still there, haunting it.",
	
	ribbons : [
		new Daycare_Ribbon("Forevermore"),
	],
}).forOccasion("100club", {
	sprite: "img/pkmn/gastly.png", //Bulbapedia
	shadow: "img/pkmn/generic-shadow.png",
	x: -19, y: -3,
	animation: "breathe",
}));

// C3KO
addEvent(new Pokemon({
	name : "C3KO",
	sprite: "img/pkmn/c3ko.gif",
	x: 25, y: 26,
	animation: null,
	
	dex : "img/pkdx/tpp_c3ko.png",
	sources : {
		"Pokedex Image from /u/Kelcyus's Twitch Pokedex Project" : "http://www.reddit.com/r/twitchplayspokemon/comments/25gcrh/twitch_pokedex_205_entries/",
		"Sprite by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/1yx0gx/i_madealtered_flairs_suggestions_or_corrections/",
	},
	
	OT: "Red",
	gamename : "CCC",
	pokename : "Hitmonlee",
	nicknames : "Triple C",
	level : 30,
	caught: "Fighting Dojo 6d 22h 4m",
	memo : "Never saw the light of day.",
	
	ribbons : [
		new Released_Ribbon("6d 22h 40m"),
		new Record_Ribbon("Fastest Release: 36m"),
	],
}));



// And finally, Red himself, stuck behind the burgler
addEvent(new Person({
	name : "Burglur",
	spritesheet : "img/trainers/burgler.png",
	x: -10, y: -36,
	
	activeZone: {
		left: -10, right: -10,
		top: -38, bottom: -37,
	},
	
	behavior: behavior.look,
	
	dialog : [
		"I wonder where my partner went.",
	],
}).forOccasion("bloodysunday,bloodysaturday", {
	x: -9, y:-35,
}));

addEvent(new Trainer({
	name : "RED",
	spritesheet : "img/trainers/red.png",
	x: -10, y: -37,
	
	dex : "img/pkdx/trainer_red.png",
	nickname : "Red",
	idnum : "20152",
	playtime: "16d 7h 45m",
	pokedex : "30 own / 132 seen",
	releasecount : 16,
	catchcount : 0,
	e4attempts : 22,
	blackouts : "???",
	
	personality: "Often characterized as a robot, Red was silent and had no notable personality during his run.",
	notable : "TPP received <a href='http://www.mcmbuzz.com/2014/06/15/twitch-plays-pokemon-wins-a-guinness-world-record/'>a Guinness World Record</a> for the most participants on a single-player online video game: 1,165,140",
	ribbons : [
		new Record_Ribbon("Won a Guinness World Record"),
	],
	
	// info_html : 
	// 	"Number of E4 Attempts: 22<br/>"+
	// 	"Times Blacked Out: ???<br/>"+
	// 	"<br/>"+
	// 	"<br/>"+
	// 	"",
	icons : [
		new Icon("helix_fossil.png", "<b>CONSULT THE HELIX FOSSIL!</b> We \"worshiped\" the fossil by selecting it in battle all the time. Oak's words echoed,\"There's a time and place for everything! But not now.\" "),
		new Icon("ss_ticket.png", "<b>The SS Ticket</b> we also worshiped as a lesser idol. Oak's words echoed,\"There's a time and place for everything! But not now.\" "),
		new Icon("lift_key.png", "<b>The Rocket Lift</b> key was also worshiped as a lessor idol. Oak's words echoed,\"There's a time and place for everything! But not now.\" "),
		new Icon("poke_flute.png", "We played <b>The Pokeflute</b> many times, and always when it wasn't necessary. Now that's a catchy tune!"),
		new Icon("rocket_pad.png", "We spent 24 hours in <b>Mr. Giovanni's Wild Ride</b> before democracy was implemented."),
		new Icon("master_ball.png", "Our one and only use of the <b>Master Ball</b> to catch a legendary pokemon, Zapdos."),
	],
	
	badges_info : {
		img: "img/icn/badges_red.png",
		frame_width: 16,
		frame_height: 16,
	},
	badges : [
		new Badge({ name: "Boulder Badge", leader: "Brock", type: "Rock" }),
		new Badge({ name: "Cascade Badge", leader: "Misty", type: "Water" }),
		new Badge({ name: "Thunder Badge", leader: "Lt. Surge", type: "Electric" }),
		new Badge({ name: "Rainbow Badge", leader: "Erika", type: "Grass" }),
		new Badge({ name: "Soul Badge", leader: "Koga", type: "Poison" }),
		new Badge({ name: "Marsh Badge", leader: "Sabrina", type: "Psychic" }),
		new Badge({ name: "Volcano Badge", leader: "Blaine", type: "Fire" }),
		new Badge({ name: "Earth Badge", leader: "Giovanni", type: "Ground" }),
	],
	
	sources: {
	},
	
	activeZone: {
		left: -10, right: -10,
		top: -38, bottom: -37,
	},
	
	behavior: behavior.meander,
	behavArg : {
		"left" : -10, "top" : -38,
		"right": -10, "bottom": -37,
	},
}).forOccasion("bloodysunday", {
	x: -7, y: -4,
	behavior: null,
}).forOccasion("bloodysaturday", {
	x: -19, y: -9,
	behavior: null,
}));



// And the clingy/revive girl and her pokemart
addEvent(new Building({
	name: "Pokemart",
	sprite: "img/bld/mart.png",
	x : -5, y : 21,
	warp_x: 16, warp_y: 46,
}));

addEvent(new Person({
	name : "Clingy Girl",
	spritesheet : "img/trainers/clingy-girl.png",
	x: -5, y: 22,
	
	activeZone: {
		left: -9, right: -1,
		top: 22, bottom: 23,
	},
	
	behavior: behavior.meander,
	behavArg : {
		"left" : -9, "top" : 22,
		"right": -1, "bottom" : 23,
	},
	
	dialog : [
		"REVIVE is costly, but it revives fainted POK&eacute;MON!",
	],
}));


//Fatman Island
addEvent(new SignPost({
	name: "Fatman Sign",
	x: -7, y: -7,
	sprite: 2,
	message: "Fatman Island: Red was glad they weren't hungry when he got stuck here...",
}));

addEvent(new Person({
	name : "Fatman 1",
	spritesheet : "img/trainers/fatman.png",
	x: -6, y: -6,
	
	activeZone: {
		left: -8, right: -6,
		top: -6, bottom: -4,
	},
	
	behavior: behavior.meander,
	behavArg : {
		"left" : -8, "top" : -6,
		"right": -6, "bottom" : -4,
		avoidEvent: "Fatman 2",
	},
	
	// dialog : [
	// 	"REVIVE is costly, but it revives fainted POK&eacute;MON!",
	// ],
}).forOccasion("bloodysunday", {
	skipme: true,
}));

addEvent(new Person({
	name : "Fatman 2",
	spritesheet : "img/trainers/fatman.png",
	x: -8, y: -6,
	
	activeZone: {
		left: -8, right: -6,
		top: -6, bottom: -4,
	},
	
	behavior: behavior.meander,
	behavArg : {
		"left" : -8, "top" : -6,
		"right": -6, "bottom" : -4,
		avoidEvent: "Fatman 1",
	},
	
	// dialog : [
	// 	"REVIVE is costly, but it revives fainted POK&eacute;MON!",
	// ],
}).forOccasion("bloodysunday", {
	skipme: true,
}));
