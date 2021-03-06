// gen3.js
// File for TPP Emerald events
// 


//
// Note: Zexy is attached to the Released Starter Campfire multi-event 
// defined in the "other" events file. See there for his event definition.
//

addEvent(new MultiEvent({
	name: "M4 Bowling",
	sprite: "img/pkmn/m4_bowling.gif",
	x: -13, y: 5, z:5,
}).addSubEvent("29,42,110,69", new Pokemon({
	name : "M4",
	// sprite: "img/pkmn/cabbage_white.png",
	// x: -37, y: -25,
	
	dex : "img/pkdx/emdex_M4.png",
	sources : {
		"Pokedex Image by /u/NoPenNameGirl" : "http://www.reddit.com/r/twitchplayspokemon/comments/22kx4y/the_ateam_sprite/",
		"Sprite by /u/carlotta4th": "",
	},
	
	OT: "<strike>M</strike>Ay",
	gender: 2,
	gamename : "M ---/'/'4",
	pokename : "Azumarill",
	nicknames : "M4rill, Moe, Virgin Marill",
	level : 100,
	memo : "Known for her signature move: Rollout.",
	
	ribbons : [
		new Record_Ribbon("First Lvl 100 Pokemon"),
		new HallOfFame_Ribbon("21d 19h 27m"),
	],
})).addSubEvent("1,34,28,67", new Pokemon({
	name : "5'7",
	// sprite: "img/pkmn/cabbage_white.png",
	// x: -37, y: -25,
	
	dex : "img/pkdx/emdex_57.png",
	sources : {
		"Pokedex Image by /u/NoPenNameGirl" : "http://www.reddit.com/r/twitchplayspokemon/comments/22kx4y/the_ateam_sprite/",
		"Sprite by /u/carlotta4th": "",
	},
	
	OT: "<strike>M</strike>Ay",
	gender: 2,
	gamename : '-5""7"Y',
	pokename : "Graveler",
	nicknames : "Five Feet",
	level : 68,
	memo : "Knew Explosion at one point, which she used indiscriminately.",
	
	ribbons : [
		new HallOfFame_Ribbon("21d 19h 27m"),
	],
})).addSubEvent("151,0,176,24", new Pokemon({
	name : "Dotty",
	sprite: "img/pkmn/dotty.png",
	// shadow: "img/pkmn/generic-shadow.png",
	// x: 33, y: -10, z: 22,
	
	dex : "img/pkdx/b/Spr_3e_291.gif",
	sources : {
		"Pokedex Image from Bulbapedia" : "",
		"Sprite by /u/carlotta4th": "",
	},
	
	OT: "<strike>M</strike>Ay",
	gamename : ". TT",
	pokename : "Ninjask",
	nicknames : "(Inappropriate names)",
	level : 20,
	memo : "",
	
	ribbons : [
		new Released_Ribbon("7d 15h 36m"),
	],
}))
);

// Shedinja!
addEvent(new Pokemon({
	name : "Zexinja",
	sprite: "img/pkmn/shedinja_zexxy.png",
	// shadow: "img/pkmn/generic-shadow.png",
	x: -15, y: 5, z: 16*4,
	
	dex : "img/pkdx/emdex_shedinja.png",
	sources : {
		"Pokedex Image by /u/bboyskullkid" : "http://www.reddit.com/r/twitchplayspokemon/comments/21g0da/was_inspired_by_my_flair_and_drew_zexxys_soul/",
		"Sprite is Flair by /u/RT-Pickred": "",
	},
	
	OT: "<strike>M</strike>Ay",
	gamename : "Shedinja",
	pokename : "Shedinja",
	nicknames : "ZexyNinja",
	level : 26,
	caught : "Appeared 3d 23h 3m",
	memo : "Thought to hold the soul of Zexy after his release.",
}));



addEvent(new Pokemon({
	name : "Cruella",
	sprite: "img/pkmn/cruella_water.png",
	x: -1, y: -1,
	
	dex : "img/pkdx/emdex_cruella.png",
	sources : {
		"Pokedex Image by /u/NoPenNameGirl" : "http://www.reddit.com/r/twitchplayspokemon/comments/22kx4y/the_ateam_sprite/",
	},
	
	OT: "<strike>M</strike>Ay",
	gender: 2,
	gamename : "GJKLFFZ",
	pokename : "Tentacruel",
	nicknames : "GJK, The Kraken",
	level : 79,
	memo : "Great tank. Hidden Power: Electric.",
	
	ribbons : [
		new HallOfFame_Ribbon("21d 19h 27m"),
	],
}).forOccasion("bloodysunday", {
	x: -30, y: -2,
	adj_flip: true,
}));

addEvent(new Pokemon({
	name : "Annie",
	sprite: "img/pkmn/annie.png",
	x: 22, y: 25,
	
	dex : "img/pkdx/emdex_annie.png",
	sources : {
		"Pokedex Image by /u/NoPenNameGirl" : "http://www.reddit.com/r/twitchplayspokemon/comments/22kx4y/the_ateam_sprite/",
		"Sprite is Flair by /u/RT-Pickred": "",
	},
	
	OT: "<strike>M</strike>Ay",
	gender: 2,
	gamename : 'A♀NIIIIc33',
	pokename : "Hariyama",
	nicknames : 'Anice, "A Girl, <em>Nice</em>"',
	level : 78,
	caught: "In victory road.",
	memo : "Consistantly swept 2-3 of the E4 every run.",
	
	ribbons : [
		new HallOfFame_Ribbon("21d 19h 27m"),
	],
}));


addEvent(new MovingPokemon({
	name : "Alpha",
	spritesheet: "img/pkmn/kadabra_biking.png",
	x: -8, y: 14,
	
	dex : "img/pkdx/b/Spr_3e_064.gif", //Bulbapedia
	sources : {
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "<strike>M</strike>Ay",
	gender: 1,
	gamename : "apf uojkyy",
	pokename : "Kadabra",
	level : 29,
	nicknames : "Apfel, Fap Junky",
	memo : '"How did we get a Kadabra?!"',
	
	ribbons : [
		new Record_Ribbon("TPP's First Abra"),
	],
	
	activeZone: {
		left: -22, right: 0,
		top: 14, bottom: 30,
	},
	
	behavior : behavior.movePath,
	behavArg : {
		run : true,
		path : [
			0,  14,
			0,  30,
			-22, 30,
			-22, 14,
		],
	},
	frame_width : 32,
	frame_height : 42,
}).forOccasion("bloodysunday", {
	x: 9, y: -4,
	// frame_height : 24,
	
	behavior: function(){
		this.direction = 2;
		this.updateImage();
	},
}));

//////////// C3 and Apostropi's Event Suite //////////////
addEvent(new Event({
	name: "C3's Capture",
	sprite: "img/pkmn/c3_tied.gif",
	x: 158, y: -265,
	anim: "custom",
	
	domTied : null,
	domRopes : null,
	domAnim : null,
	
	behavior: function(){
		this._isActive = false; //behavior only used for initializing
		
		if ($.cookie("c3-freed")) {
			this.domElement.hide(); //don't show this at all if he's been freed already
		}
	},
	
	getDomElement : function(){
		if (this.domElement) return this.domElement;
		
		var eventobj = this;
		
		var base = $("<div>").addClass("event-base").attr("name", this.name);
		this.domTied = this._createImageTag();
		
		var img = $("<img>").attr("src", "img/pkmn/c3.png").addClass("second")
				.css({ "z-index" : 100, })
				.on("load", function(){ //need to get the width after it loads
					img.css("left", -(this.width / 2) + 8 + eventobj.adj_x);
					img.hide();
				});
		this.domAnim = this._applySpriteAnimation(img);
		
		var ropes = $("<img>").attr("src", "img/pkmn/c3_looseropes.png").addClass("second")
				.on("load", function(){ //need to get the width after it loads
					ropes.css("left", -(this.width / 2) + 8 + eventobj.adj_x);
					ropes.hide();
				});
		
		base.append(this.domTied);
		base.append(this.domAnim);
		base.append(ropes);
		
		this._storeElement(base);
		return base;
	},
	
	doClick : function() {
		//Bring up C3's summary screen
		var c3 = eventRegistry["gen3_c3_final"];
		c3.doClick();
		
		//play animation
		this.domElement.find(".main").hide();
		this.domElement.find(".second").show();
		
		this.domAnim
			.animate({ bottom: 8, }, 200)
			.animate({ bottom: 0, }, 200).delay(1500)
			.queue(function(){
				$(this).dequeue("movec3");
				$(this).dequeue();
			})
			.animate({ left: -16 * 7 }, { duration: 1200, easing: 'linear', queue: 'movec3' })
			.animate({ bottom: 32 }, { duration: 200, easing: 'linear', queue: 'movec3' })
			.animate({ bottom: 8 }, { duration: 200, easing: 'easeOutQuad' })
			.animate({ bottom: 0 }, { duration: 200, easing: 'easeInQuad' })
			.animate({ bottom: 8 }, { duration: 200, easing: 'easeOutQuad' })
			.animate({ bottom: 0 }, { duration: 200, easing: 'easeInQuad' })
			.animate({ bottom: 8 }, { duration: 200, easing: 'easeOutQuad' })
			.animate({ bottom: 0 }, { duration: 200, easing: 'easeInQuad' })
			.fadeOut(200);
		
		//time out based on text length	
		var text = "C3 was released from his bindings! He ran off to get revenge!";
		var timeout = Math.max(4800, text.length * 80);
		showDialog(text, this.domElement.position(), timeout);
		
		$.cookie("c3-freed", true);
		eventRegistry["gen3_c3_final"].doSwitch();
		eventRegistry["gen3_apostropi"].doSwitch();
		eventRegistry["gen3_apostropi_down"].doSwitch();
	},
}));

addEvent(new Pokemon({
	name : "C3", id:"gen3_c3_final",
	sprite: "img/pkmn/c3.png",
	x: 41, y: 30,
	
	dex : "img/pkdx/emdex_c3.png",
	sources : {
		"Pokedex Image by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/",
	},
	
	OT: "<strike>M</strike>Ay",
	gender: 1,
	gamename : "CCC",
	pokename : "Minun",
	nicknames : "Pvt. C3",
	level : 33,
	memo : "Promising young recruit, captured in his prime by Apostropi.",
	
	behavior: function(){
		this._isActive = false; //behavior only used for initializing
		
		if (!$.cookie("c3-freed")) {
			this.domElement.hide();
		} else {
			this.doSwitch();
		}
	},
	
	doSwitch: function(){
		this.domElement.show();
	},
}));

addEvent(new Pokemon({
	name : "Apostropi", id: "gen3_apostropi",
	sprite: "img/pkmn/apostropi.png",
	x: 41, y: 30,
	
	dex : "img/pkdx/emdex_apostropi.png",
	sources : {
		"Pokedex Image by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/",
	},
	
	OT: "<strike>M</strike>Ay",
	gender: 2,
	gamename : "\\'",
	pokename : "Pikachu",
	nicknames : "Apostrachu",
	level : 26,
	memo : "Seen as an imposter, taking Minun's place.",
	
	behavior: function(){
		this._isActive = false; //behavior only used for initializing
		
		if ($.cookie("c3-freed")) {
			//this.doSwitch();
			this.y += 2;
			this.domElement.css({
				top: this.y * 16,
				"z-index" : ZBASE + this.y,
			});
		}
	},
	
	doSwitch: function(){
		this.domElement.hide();
	},
}));

addEvent(new Pokemon({
	//After he's geen knocked down by C3
	refid: "gen3_apostropi",
	id: "gen3_apostropi_down",
	sprite: "img/pkmn/apostropi_down.gif",
	x: 41, y: 33,
	animation: null,
	
	behavior: function(){
		this._isActive = false; //behavior only used for initializing
		this.domElement.hide();
	},
	
	doSwitch: function(){
		this.domElement.show();
	},
}))

//////////////////////////////////////////////////////////

addEvent(new Pokemon({
	name : "Bird Cop",
	sprite: "img/pkmn/birdcop_soaring.gif",
	shadow: "img/pkmn/generic-shadow.png",
	x: -31, y: 4, z: 32,
	animation: "custom",
	
	dex : "img/pkdx/emdex_birdcop.png",
	sources : { 
		"Pokedex Image by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/",
		"Sprite is Flair by /u/RT-Pickred": "",
		"Animated by /u/carlotta4th": "",
	},
	
	OT: "<strike>M</strike>Ay",
	gender: 2,
	gamename : "BDCIOPP",
	pokename : "Wingull",
	level : 26,
	
	ribbons : [
		new Released_Ribbon("9d 8h 53m"),
	],
	
	activeZone: {
		left: -32, right: -30,
		top: 3, bottom: 5,
	},
	
	behavior : function(){
		if (!this.domImg) this.domImg = $(this.domElement).find(".main");
		if (!this.domSdw) this.domSdw = $(this.domElement).find(".shadow");
		if (!this.animStep) this.animStep = 0;
		
		var i = this.animStep++;
		
		var x = Math.sin(i*0.32) * 16;
		var y = Math.cos(i*0.75) * 6;
		
		this.domImg.animate({ bottom: y, left: x }, { duration: 500 });
		this.domSdw.animate({ bottom: y/2, left: x }, { duration: 500 });
	}
}));


// Oddish in da house! With Cabbage the White
addEvent(new Building({
	name: "Oddish House",
	sprite: "img/bld/oddishhouse.png",
	x : -35, y : -27,
	warp_x: 16, warp_y: 48,
}));
addEvent(new SignPost({
	name : "Oddish House Mailbox",
	x: -31, y: -27,
	sprite: 3,
	message: "<strong>Oddish House</strong>",
}));

addEvent(new Pokemon({
	name : "Cabbage",
	sprite: "img/pkmn/cabbage_white.png",
	x: -37, y: -25,
	
	dex : "img/pkdx/emdex_cabbage_white.png",
	sources : {
		"Pokedex Image by /u/NoPenNameGirl" : "http://www.reddit.com/r/twitchplayspokemon/comments/22kx4y/the_ateam_sprite/",
		"Sprite is Flair by /u/RT-Pickred": "",
	},
	
	OT: "<strike>M</strike>Ay",
	gender: 2,
	gamename : "Vileplume",
	pokename : "Vileplume",
	nicknames : "Cabbage the White",
	level : 49,
	ball : "safari",
	
	ribbons : [
		new HallOfFame_Ribbon("21d 19h 27m"),
	],
}));


addEvent(new MultiEvent({
	name : "An Odd(ish) Family",
	sprite : "img/pkmn/oddish_kiss.gif",
	x: -34, y: -23,
}).addSubEvent("0,3,19,26", new Pokemon({
	name : "Oddish",
	// sprite: "img/pkmn/oddish_1.png",
	// x: -33, y: -23,
	
	dex : "img/pkdx/b/Spr_3e_043.gif", //Bulbapedia
	sources : {
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "<strike>M</strike>Ay",
	gender: 1,
	gamename : "Oddish",
	pokename : "Oddish",
	level : 25, //No one cares about the oddish's levels
	ball : "safari",
	memo : "Proud father of a daycare baby.",
	
	ribbons : [
		new Daycare_Ribbon("Forevermore"),
	],
	
})).addSubEvent("34,0,48,20", new Pokemon({
	name : "Oddish",
	// sprite: "img/pkmn/oddish_2.png",
	// x: -35, y: -23,
	
	dex : "img/pkdx/b/Spr_3e_043.gif", //Bulbapedia
	sources : {
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "<strike>M</strike>Ay",
	gender: 2,
	gamename : "Oddish",
	pokename : "Oddish",
	level : 25, //No one cares about the oddish's levels
	ball : "safari",
	memo : "Proud mother of a daycare baby.",
	
	ribbons : [
		new Daycare_Ribbon("Forevermore"),
	],
	
})).addSubEvent("20,14,35,25", new Pokemon({
	name : "Oddish Egg",
	// sprite: "img/pkmn/egg.png",
	// x: -34, y: -23, z: -3,
	// animation: null,
	
	dex : "img/pkdx/b/Spr_3r_Egg.png", //Bulbapedia
	sources : {
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "<strike>M</strike>Ay",
	gender: 0,
	gamename : "???",
	pokename : "Egg",
	level : 5, //No one cares about the oddish's levels
	memo : "Unhatched baby of a daycare family.",
	
	ribbons : [
		new Daycare_Ribbon("Forevermore"),
		new Record_Ribbon("First Egg of TPP"),
	],
}))
);


// The G-Man (Wurmple)
addEvent(new Pokemon({
	name : "G-Man",
	sprite: "img/pkmn/gman.png",
	x: 8, y: 7, //behind the church of helix
	animation : null,
	
	dex : "img/pkdx/emdex_gman.png",
	sources : {
		"Pokedex Image from /u/Kelcyus's Twitch Pokedex Project" : "http://www.reddit.com/r/twitchplayspokemon/comments/25gcrh/twitch_pokedex_205_entries/",
	},
	
	OT: "<strike>M</strike>Ay",
	gender: 1,
	gamename : "Gmnnn",
	pokename : "Wurmple",
	level : 6,
	nicknames: "Geronimo",
	memo : "Said to work for a shadowy employer working against Bill. Mysterious.",
	
	activeZone : function(load) {
		var res = !(
			this.y > load.bottom ||
			this.y < load.top ||
			this.x > load.right ||
			this.x < load.left
		);
		if (this._isActive && !res) this.behavior(true);
		return res;
	},
	
	behavior: function(exiting) {
		if (exiting) {
			var rnd = Math.floor(Math.random() * this.behavArg.length);
			var newloc = this.behavArg[rnd];
			
			$.extend(this, {x: 8, y:7, z:0}, newloc);
			
			console.log("GMan vanishes to ", newloc);
			this.domElement.css({
				top: this.y * 16, 
				left: this.x * 16,
				"z-index" : ZBASE + this.y,
			});
			this.domElement.find(".main").css({
				bottom : this.z,
			})
		}
	},
	behavArg : [
		{x: 6, y: 5},  {x: 95, y: -24, z:6}, {x: -34, y: 31, z:-6},
		{x: 32, y: 43}, {x: -153, y: -53}, {x: 112, y: -144}, 
		{x: 16, y: -36, z:2}, {x: -7, y: 55}, {x: -86, y: 97, z:8},
		{x: 61, y: 57, z:14},
	],
}));



addEvent(new Pokemon({
	name: "Chinchou",
	sprite: "img/pkmn/shiny-chinchou.gif",
	x: -40, y: -8,
	
	dex: "img/pkdx/b/Spr_3e_170_s.gif", //Bulbapedia
	sources : {
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "--",
	gamename: "--",
	pokename: "Chinchou",
	caught: "Encountered by <strike>M</strike>Ay.",
	memo: "TPP's first random shiny, killed in battle.",
	level: 25,
	
	ribbons : [
		new Record_Ribbon("First Shiny Encounter"),
	],
}));

addEvent(new MultiEvent({
	name: "Master Zubat and Trainer",
	sprite: "img/pkmn/master_zubat.gif",
	x: -28, y: -37,
}).addSubEvent("40,0,63,24", new Pokemon({
	name: "Zubat",
	
	dex: "img/pkdx/b/Spr_3e_041.gif", //Bulbapedia
	sources : {
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "Aqua Grunt",
	gamename: "--",
	pokename: "Zubat",
	caught: "Encountered by <strike>M</strike>Ay.",
	level: "???",
	memo: "Master Ball thrown at another trainer's pokemon.",
	
	ribbons : [
		new Master_Ribbon(),
	],
})).addSubEvent("0,0,16,24", new Person({
	name: "Aqua Grunt",
	behavior: null,
	dialog: [
		"Don't be a thief!"
	],
	
	updateImage : function(){},
	getPosition : function(){
		var o = this.parent.domElement.position();
		// o.left += 33;
		// o.top += 50;
		return o;
	},
}))
);

// Wattson! <3
addEvent(new Person({
	name : "Wattson",
	spritesheet : "img/trainers/wattson.png",
	x: -20, y: 32,
	
	activeZone: {
		left: -20, right: -20,
		top: 32, bottom: 32,
	},
	
	behavior: behavior.look,
	
	dialog : [
		"WAHAHAHAHAHA!",
		"WAHAHAHAHAHAHAHA!",
		"Wahahahahaha!",
		"WAHAHAHAHAHAHAHAHAHAHAHA!",
		"Wahahahahahahaha!",
		"Wahahahahahahahahaha! See you again soon!", //OmegaRuby and AlphaSapphire!
	],
	
	infodex_entry: new InfodexEntry({
		title: "A Wattson",
		sprite: "img/pkdx/b/Spr_B2W2_Wattson.png",
		html: '<h1>Wattson</h1><h3>The Man behind the Measure</h3><p>Wattson is the third gym leader in the Hoenn Pokemon League. A man of great merriment, he laughs at every chance and finds joy in everything. But to TwitchPlaysPokemon, he is much more sinister, and much closer to our hearts. Wattson was measurably the hardest gym leader we ever fought, and the term "measurably" is meant literally.</p><p>Beating him took 23 attempts. He and he alone took those 23 attempt to beat. It didn\'t help that we were using M4, the water type pokemon, to do these attempts. It didn\'t help that our party was in a terrible mess at the time due to the recent discovery of the PC Roulette. And it didn\'t help that we lost Zexxy during this time either. We were stuck in Mauville for those 23 attempts, and before each attempt, he laughed at us, in our face. He laughed at our repeated failure to defeat him. WAHAHAHAHAHAHAHAHA!</p><p>On the 23rd attempt, we finally won. In his honor, we created a unit of measurement: The Wattson. 1 Wattson = 23 attempts. No single trainer has ever come close to matching Wattson\'s prowess with a pokeball.</p><p>The user /u/VillainousWattson, whom you will find in the community center, was created so Wattson could continue to follow us on our journey, and continue to laugh at us in our face. And we love him all the more for it.</p>',
	}),
}));



// And finally, May (the M is silent)!
addEvent(new MultiEvent({
	name : "Pooch Swingset",
	sprite: "img/pkmn/may_swingset.gif",
	x : 9, y : 23, z:-6,
}).addSubEvent("15,19,28,42", new Trainer({
	name : "A",
	
	dex : "img/pkdx/trainer_may_Variis.png",
	sources: {
		"Trainer Sprite by /u/CyberDork35" : "http://www.reddit.com/r/twitchplayspokemon/comments/230qbl/im_making_custom_twitch_plays_pokemon_trainer/",
		"Sprite based on Artwork by /u/Variis" : "http://www.reddit.com/r/twitchplayspokemon/comments/215jvk/dark_rituals/",
	},
	
	idnum : "61415",
	nickname : "<strike>M</strike>ay (the M is Silent)",
	playtime: "21d 19h 27m",
	pokedex : "40 own/164 seen",
	releasecount : 5,
	catchcount : 0,
	e4attempts : 103,
	blackouts : "89+",
	
	personality: "A is a rebel, opting to disobey the voices at every chance and do things like catch loads of Oddish instead of training mon, or go fishing next to the cataclysmic legendary pokemon battles instead of help stop them.",
	notable: 
		"Oddish Caught: 29<br/>"+
		"Poochyena Caught: 7<br/>"+
		"Boyfriend: Brendan T. Birch",
	ribbons: [
		new Record_Ribbon("Highest number of E4 attempts"),
		new Record_Ribbon("Highest number of attempts againt a single trainer: Wattson"),
	],
	
	// info_html : 
	// 	"Number of E4 Attempts: 103<br/>"+
	// 	"Times Blacked Out: 89+<br/>"+
	// 	"Oddish Caught: 29<br/>"+
	// 	"Poochyena Caught: 7<br/>"+
	// 	"Boyfriend: Brendan T. Birch",
	icons : [
		new Icon("good_rod.png", "A loved to <b>Fish</b> all the time, when it was registered to the SELECT button. She was most famous for fishing right next to the world-destroying battle between Kyroge and Groudon."),
		// new Icon("goggles.png", ""), //they weren't THAT important, actually...
		new Icon("../pkmn/oddish_1.png", "The <b>Great Cabbage Harvest</b> happened when A walked into the Safari Zone one day and threw a pokeball at everything that moved. She ended up mostly with Oddishes."),
		new Icon("cat_head.png", "Speculation in the lore states that A was likely the little girl in the game <b>Catz</b> before Emerald started. She killed several cats out of an inability to feed them or take care of them."),
		new Icon("contest_pass.png", "A was the first protagonist who could enter a <b>Contest</b>, and we very much wanted to enter several. Unfortunately, the most she ever did was enter perhaps one and cook a few horrendous pokeblocks."),
		new Icon("clock.png", "When A started out, she spent almost an hour rebelling against her mother, who insisted that she <b>set the Clock</b> in her room. After many escape attempts all halted by her mother, she did set it."),
	],
	
	badges_info : {
		img: "img/icn/badges_emerald.png",
		frame_width: 16,
		frame_height: 16,
	},
	badges : [
		new Badge({ name: "Stone Badge", leader: "Roxanne", type: "Rock" }),
		new Badge({ name: "Knuckle Badge", leader: "Brawly", type: "Fighting" }),
		new Badge({ name: "Dynamo Badge", leader: "Wattson", type: "Electric" }),
		new Badge({ name: "Heat Badge", leader: "Flannery", type: "Fire" }),
		new Badge({ name: "Balance Badge", leader: "Norman", type: "Normal" }),
		new Badge({ name: "Feather Badge", leader: "Winona", type: "Flying" }),
		new Badge({ name: "Mind Badge", leader: "Tate and Liza", type: "Psychic" }),
		new Badge({ name: "Rain Badge", leader: "Juan", type: "Water" }),
	],
	
})).addSubEvent("16,1,30,13", new Pokemon({ //top pooch
	name : "A Doge",
	
	dex : "img/pkdx/b/Spr_3e_261.gif",
	sources : {
		"Pokedex Image from Bulbapedia" : "",
		"Swingset Sprite by /u/Bayoeen" : "http://www.reddit.com/r/twitchplayspokemon/comments/21gzza/banner_doge_improvements/",
	},
	
	OT: "<strike>M</strike>Ay",
	gender: 1,
	gamename : "A",
	pokename : "Poochyena",
	level : 12,
	
})).addSubEvent("34,22,47,42", new Pokemon({ //swinging pooch
	name : "Pacifist Doge",
	
	dex : "img/pkdx/b/Spr_3e_261.gif",
	sources : {
		"Pokedex Image from Bulbapedia" : "",
		"Swingset Sprite by /u/Bayoeen" : "http://www.reddit.com/r/twitchplayspokemon/comments/21gzza/banner_doge_improvements/",
	},
		
	OT: "<strike>M</strike>Ay",
	gender: 1,
	gamename : "Poochyena",
	pokename : "Poochyena",
	nicknames : "Daycare Doge, Pacifist Doge",
	level : 29,
	memo: "Due to leaving it in the day care longer than intended, it has no damaging moves.",
	
	ribbons: [
		new Daycare_Ribbon("Made it a Pacifist"),
	],
	
}))
);

addEvent(new MultiEvent({
	name : "Pooch Rolling",
	sprite: "img/pkmn/doge_ball.gif",
	x : 10, y : 25,
}).addSubEvent("0,0,21,16", new Pokemon({ //Left Doge, big
	name : "Alpha Doge",
	
	dex : "img/pkdx/b/Spr_3e_261.gif",
	sources : {
		"Pokedex Image from Bulbapedia" : "",
		"Swingset Sprite by /u/Bayoeen" : "http://www.reddit.com/r/twitchplayspokemon/comments/21gzza/banner_doge_improvements/",
	},
	
	OT: "<strike>M</strike>Ay",
	gender: 2,
	gamename : "Poochyena",
	pokename : "Poochyena",
	nicknames : "Alpha Doge, Dogeyena",
	level : 36,
	memo: "Second strongest of A's doges.",
	
	ribbons: [
		new Daycare_Ribbon("Made it a Fighter"),
	],
	
})).addSubEvent("37,0,54,16", new Pokemon({ //Right doge, small
	name : "Doge",
	
	dex : "img/pkdx/b/Spr_3e_261.gif",
	sources : {
		"Pokedex Image from Bulbapedia" : "",
		"Swingset Sprite by /u/Bayoeen" : "http://www.reddit.com/r/twitchplayspokemon/comments/21gzza/banner_doge_improvements/",
	},
	
	OT: "<strike>M</strike>Ay",
	gender: 1,
	gamename : "Poochyena",
	pokename : "Poochyena",
	level : 8,
}))

);

addEvent(new Pokemon({
	name : "Mightydoge",
	sprite: "img/pkmn/mighty_doge.gif",
	x: 6, y: 23,
	animation: null,
	
	dex : "img/pkdx/emdex_mightydoge.png",
	sources : {
		"Pokedex Image by /u/NoPenNameGirl" : "http://www.reddit.com/r/twitchplayspokemon/comments/22kx4y/the_ateam_sprite/",
	},
	
	OT: "<strike>M</strike>Ay",
	gender: 1,
	gamename : "Mightyena",
	pokename : "Mightyena",
	nicknames : "Mighty Cop",
	level : 50,
	
	ribbons : [
		new HallOfFame_Ribbon("21d 19h 27m"),
	],
}));

addEvent(new Pokemon({
	name : "ATM",
	sprite: "img/pkmn/ATM.gif",
	x: 6, y: 26,
	animation: null,
	
	dex : "img/pkdx/b/Spr_3e_261.gif",
	sources : {
		"Pokedex Image from Bulbapedia" : "",
	},
	
	OT: "<strike>M</strike>Ay",
	gender: 2,
	gamename : "ATMMMGMGG",
	pokename : "Poochyena",
	nicknames : "Automated Teller Doge, All Terrain Doge",
	level : 14,
}));
