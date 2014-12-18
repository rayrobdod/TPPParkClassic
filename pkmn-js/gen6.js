// gen 6.js
// File for TPP X
//




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
	
	behavior: behavior.meander,
	behavArg : {
		"left" : -18, "top" : 18,
		"right": -13, "bottom": 22,
	},
	activeZone: {
		left : -18, top : 18,
		right: -13, bottom: 22,
	},
	
});
addEvent(trainer_d);

addEvent(new Person({
	//skipme: true,
	name : "Lakitu",
	spritesheet : "img/trainers/lakitu.png",
	x: -13, y: 20,
	
	activeZone: trainer_d.activeZone,
	
	
	
	// record of d's movements
	dPrevX: -14, dPrevY: 20,
	dRecentX: -15, dRecentY: 20,
	
	updateDPrevXY : function() {
		var dCurrX = (trainer_d._d_x === undefined ? trainer_d.x : trainer_d._d_x);
		var dCurrY = (trainer_d._d_y === undefined ? trainer_d.y : trainer_d._d_y); 
		
		if (this.dRecentX != dCurrX || this.dRecentY != dCurrY) {
			this.dPrevX = this.dRecentX;
			this.dPrevY = this.dRecentY;
		}
		this.dRecentX = dCurrX;
		this.dRecentY = dCurrY; 
	},
	
	
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
		
		this.updateDPrevXY.call(this);
		// move to the location where d was previously
		if (this.x != this.dPrevX || this.y != this.dPrevY) {
			var evtobj = this;
			var _x = this.dPrevX;
			var _y = this.dPrevY;
			
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
