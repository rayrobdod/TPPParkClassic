// gen 6.js
// File for TPP X
//


//TODO: Add Lil'D, but also the Laktu Cameraman following behind him.

trainer_d = new Trainer({
	//skipme: true,
	name : "d&nbsp;",
	spritesheet : "img/trainers/red.png",
	x: -15, y: 20,
	
	dex : "img/pkdx/trainer_d.png",
	sources : {
		"Pokedex Image by /u/carlotta4th" : "http://www.reddit.com/r/twitchplayspokemon/comments/252a2b/tpp_sprites/"
	},
	
	idnum : "17065",
	nickname : "Lil'D",
	altnicks : "Richard",
	playtime: "8d 0h 0m",
	pokedex : "",
	releasecount : 0,
	catchcount : "",
	e4attempts : 21,
	blackouts : "63+",
	
	personality: "",
	notable: 
		"<br/>"+
		""+
		"",
	ribbons: [
		new Record_Ribbon("Shortest time to first badge: 0d 3h 54m"),
		new Record_Ribbon("Shortest time to hall of fame: 5d 5h 9m"),

	],
	
	icons : [
		new Icon("awakening.png", "d carried roughtly 70 Awakening on hand at all times."),
	],
	
	badges_info : {
		img: "img/icn/badges_x.png",
		frame_width: 15,
		frame_height: 25,
	},
	badges : [
		new Badge({ name: "Bug Badge", leader: "Viola", type: "Bug" }),
		new Badge({ name: "Cliff Badge", leader: "Grant", type: "Ground" }),
		new Badge({ name: "Rumble Badge", leader: "Korrina", type: "Fighting" }),
		new Badge({ name: "Plant Badge", leader: "Ramos", type: "Grass" }),
		new Badge({ name: "Voltage Badge", leader: "Clemont", type: "Electric" }),
		new Badge({ name: "Fairy Badge", leader: "Valerie", type: "Fairy" }),
		new Badge({ name: "Psychic Badge", leader: "Olympia", type: "Psychic" }),
		new Badge({ name: "Iceburg Badge", leader: "Wulfric", type: "Ice" }),
	],
	
	behavior: function(){
		if (this.recentX != this.x || this.recentY != this.y) {
			this.prevX = this.recentX;
			this.prevY = this.recentY;
		}
		this.recentX = this.x;
		this.recentY = this.y; 
		
		behavior.meander.call(this);
	},
	behavArg : {
		"left" : -18, "top" : 18,
		"right": -13, "bottom": 22,
	},
	activeZone: {
		left : -18, top : 18,
		right: -13, bottom: 22,
	},
	
	// to support Lakitu
	prevX: -14, prevY: 20,
	recentX: -15, recentY: 20,
});
addEvent(trainer_d);

addEvent(new Person({
	//skipme: true,
	name : "Lakitu",
	spritesheet : "img/trainers/joey.png",
	x: -14, y: 20, // set immediately by behavior
	
	activeZone: trainer_d.activeZone,
	
	
	
	behavior : function(){
		var dpos = trainer_d.domElement.position();
		var latpos = this.domElement.position();
		
		// face towards d
		var facingAngle = Math.atan2(dpos.top - latpos.top, dpos.left - latpos.left);
		if      (Math.PI/4 <= facingAngle && facingAngle < Math.PI*3/4) { dir = 0; }
		else if (-Math.PI/4 <= facingAngle && facingAngle < Math.PI/4) { dir = 3; }
		else if (-Math.PI*3/4 <= facingAngle && facingAngle < -Math.PI/4) { dir = 1; }
		else { dir = 2; }
		this.direction = dir;
		
		
		// move to the location where d was previously
		if (this.x != trainer_d.prevX || this.y != trainer_d.prevY) {
			var evtobj = this;
			var _x = trainer_d.prevX;
			var _y = trainer_d.prevY;
			
			this._d_x = _x;
			this._d_y = _y;
			$(this.domElement).animate({
				left : _x * 16,
				top : _y * 16,
				"z-index" : ZBASE + _y,
			}, {
				duration: 500,
				easing: "linear",
				progress : function(a,b) {
					// lakitu floats, so no need for a walking animation
					evtobj.updateImage();
				},
				complete : function(){
					evtobj.x = _x;
					evtobj.y = _y;
					evtobj._d_x = evtobj._d_y = undefined;
				}
			});
			
		}
		this.updateImage();
	}
}));
