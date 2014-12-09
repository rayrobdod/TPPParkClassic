// gen 6.1.js
// File for TPP ORAS
//

(function(){
	var date = new Date(Date.UTC(2014, 11-1, 22, 0+3));
	if (date.getTime() > new Date().getTime()) {
		showTimer("TPP ORAS starts in<br/>", date);
	} else {
		showGameClock("TPP ORAS Game Clock<br/>", date);
	}
})();


// Granny
addEvent(new Building({
	skipme: true,
	name: "RestStop",
	sprite: "img/bld/reststop.png",
	x: -12, y: 21,
	
	warp_x: 16, warp_y: 48,
}));

addEvent(new Person({
	skipme: true,
	name : "Granny",
	spritesheet : "img/trainers/oldlady.png",
	x: -11, y: 22,
	
	activeZone: {
		left: 22, right: -10,
		top: 22, bottom: -10,
	},
	
	behavior: behavior.look,
	
	dialog : [
		"Oh dear, oh dear. <br/> Are your POK&eacute;MON still tired?",
		"You should take another rest here. <br/> That's a fine idea. You should do that.",
		"That's right. Take your time and rest up.",
	],
}));
