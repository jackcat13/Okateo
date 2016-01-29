/*$.(document).ready(function(){
	console.log("Time to Smatch BUTTONS !");
	prepareKeyboardEvents();
});*/

var keyId = 0;
var keys = [];
var ledWidth = $('.led-player.player-1').width();
var ledX = $('.led-player.player-1').position().left;
var evenenemnt = null;
var leds = [false,false,false,false,false,false];

	$(document).keypress(function(event){
		switch(event.which){
			case 49: 
				$(".button-player.player-1").addClass('clicked');
				if($('.led-player.player-1').hasClass('lighting')){
				}
				break;
			case 50: 
				$(".button-player.player-2").addClass('clicked');
				break;
			case 51: 
				$(".button-player.player-3").addClass('clicked');
				break;
			case 52: 
				$(".button-player.player-4").addClass('clicked');
				break;
			case 53: 
				$(".button-player.player-5").addClass('clicked');
				break;
			case 54: 
				$(".button-player.player-6").addClass('clicked');
				break;
		}
		evenement = event;
	});

	$(document).keyup(function(event){
		evenement = null;
		switch(event.which){
			case 97:
			case 49: 
				$(".button-player.player-1").removeClass('clicked');
				break;
			case 98:
			case 50:  
				$(".button-player.player-2").removeClass('clicked');
				break;
			case 99:
			case 51:  
				$(".button-player.player-3").removeClass('clicked');
				break;
			case 100:
			case 52:  
				$(".button-player.player-4").removeClass('clicked');
				break;
			case 101:
			case 53:  
				$(".button-player.player-5").removeClass('clicked');
				break;
			case 102:
			case 54:  
				$(".button-player.player-6").removeClass('clicked');
				break;
		}
	});

var spawnKey = function(playerNum){
	var keyModel = $('<div class="key key-'+keyId+'"></div>');
	
	var fatherDiv = $('.led-input.player-'+playerNum);
	fatherDiv.append(keyModel);
	keyModel.container = fatherDiv;
	keyModel.player = playerNum;
	keys.push(keyModel);

	
	var actualKey = $('.led-input.player-'+playerNum).find('.key-'+keyId);
	var correspondingLed = $('.led-player.player-'+playerNum);
	actualKey.animate({
		right: '100%'
	},{
		duration : 6000,
		easing: "linear",
		complete: function(){

			actualKey.stop();
			actualKey.remove();
			$('.led-input.player-'+playerNum).find('.key').first()
		}
		});
	keyId += 1;
};

var keyOnTime = function(playerNum){
	$(".led-player.player-"+playerNum).removeClass('lighting');
	playKey(key);
}


var fireMakeyMakeyLeds = function(playerNum){
	$('.led-player.player-'+playerNum).addClass('lighting');
}

var spawnRandomKey = function(){
	var num = Math.floor(Math.random()*6+1);
	spawnKey(num);
	window.setTimeout(spawnRandomKey,5000);
}

spawnRandomKey();

var collision = function(){
	for(var key in keys){
		var x = keys[key].position().left;
		if(x <= ledX + ledWidth+50 && x+15 >= ledX){
			if(leds[keys[key].player-1] == false){
				leds[keys[key].player-1] = true;
				$.get("http://localhost:8008/led/"+(keys[key].player-1));
			}
			keys[key].container.addClass('lighting');
			if(typeof evenement != "undefined" && evenement != null){
				switch(evenement.which){
						case 49: 
							if(keys[key].player == 1){
								$.get("http://localhost:8008/led/"+(keys[key].player-1));
								leds[keys[key].player-1] = false;
								keys[key].container.removeClass('lighting');
								keys[key].remove();
								keys.splice(key,1);
								console.log('Player 1 SCORED !');
								MIDI.loadPlugin({
									instrument: "acoustic_grand_piano", // or "Acoustic Grand Piano"
									callback: function() {
										MIDI.noteOn(0, Math.floor((Math.random() * 100) + 40), 127, 0); // plays note once loaded
									}
								});
							}
							break;
						case 50: 
							if(keys[key].player == 2){
								$.get("http://localhost:8008/led/"+(keys[key].player-1));
								leds[keys[key].player-1] = false;
								keys[key].container.removeClass('lighting');
								keys[key].remove();
								keys.splice(key,1);
								console.log('Player 2 SCORED !');
								MIDI.loadPlugin({
									instrument: "acoustic_grand_piano", // or "Acoustic Grand Piano"
									callback: function() {
										MIDI.noteOn(0, Math.floor((Math.random() * 100) + 40), 127, 0); // plays note once loaded
									}
								});
							}
							break;
						case 51: 
							if(keys[key].player == 3){
								$.get("http://localhost:8008/led/"+(keys[key].player-1));
								leds[keys[key].player-1] = false;
								keys[key].container.removeClass('lighting');
								keys[key].remove();
								keys.splice(key,1);
								console.log('Player 3 SCORED !');
								MIDI.loadPlugin({
									instrument: "acoustic_grand_piano", // or "Acoustic Grand Piano"
									callback: function() {
										MIDI.noteOn(0, Math.floor(Math.random()*(100-40+1)+40), 127, 0); // plays note once loaded
									}
								});
							}
							break;
						case 52: 
							if(keys[key].player == 4){
								$.get("http://localhost:8008/led/"+(keys[key].player-1));
								leds[keys[key].player-1] = false;
								keys[key].container.removeClass('lighting');
								keys[key].remove();
								keys.splice(key,1);
								console.log('Player 4 SCORED !');
								MIDI.loadPlugin({
									instrument: "acoustic_grand_piano", // or "Acoustic Grand Piano"
									callback: function() {
										MIDI.noteOn(0, Math.floor(Math.random()*(100-40+1)+40), 127, 0); // plays note once loaded
									}
								});
							}
							break;
						case 53: 
							if(keys[key].player == 5){
								$.get("http://localhost:8008/led/"+(keys[key].player-1));
								leds[keys[key].player-1] = false;
								keys[key].container.removeClass('lighting');
								keys[key].remove();
								keys.splice(key,1);
								console.log('Player 5 SCORED !');
								MIDI.loadPlugin({
									instrument: "acoustic_grand_piano", // or "Acoustic Grand Piano"
									callback: function() {
										MIDI.noteOn(0, Math.floor(Math.random()*(100-40+1)+40), 127, 0); // plays note once loaded
									}
								});
							}
							break;
						case 54: 
							if(keys[key].player == 6){
								$.get("http://localhost:8008/led/"+(keys[key].player-1));
								leds[keys[key].player-1] = false;
								keys[key].container.removeClass('lighting');
								keys[key].remove();
								keys.splice(key,1);
								console.log('Player 6 SCORED !');
								MIDI.loadPlugin({
									instrument: "acoustic_grand_piano", // or "Acoustic Grand Piano"
									callback: function() {
										MIDI.noteOn(0, Math.floor(Math.random()*(100-40+1)+40), 127, 0); // plays note once loaded
									}
								});
							}
							break;
					}
			}
		}else if( x < ledX){
			$.get("http://localhost:8008/led/"+(keys[key].player-1));
			leds[keys[key].player-1] = false;
			keys[key].container.removeClass('lighting');
			keys[key].remove();
			keys.splice(key,1);
		}
	}
}

window.setInterval(collision,10);