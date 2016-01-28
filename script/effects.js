/*$.(document).ready(function(){
	console.log("Time to Smatch BUTTONS !");
	prepareKeyboardEvents();
});*/

var keyId = 0;

	$(document).keypress(function(event){
		switch(event.which){
			case 49: 
				$(".button-player.player-1").addClass('clicked');
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
	});

	$(document).keyup(function(event){
		switch(event.which){
			case 97: 
				$(".button-player.player-1").removeClass('clicked');
				break;
			case 98: 
				$(".button-player.player-2").removeClass('clicked');
				break;
			case 99: 
				$(".button-player.player-3").removeClass('clicked');
				break;
			case 100: 
				$(".button-player.player-4").removeClass('clicked');
				break;
			case 101: 
				$(".button-player.player-5").removeClass('clicked');
				break;
			case 102: 
				$(".button-player.player-6").removeClass('clicked');
				break;
		}
	});

var overlaps = (function () {
    function getPositions( elem ) {
        var pos, width, height;
        pos = $( elem ).position();
        width = $( elem ).width() / 2;
        height = $( elem ).height();
        return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
    }

    function comparePositions( p1, p2 ) {
        var r1, r2;
        r1 = p1[0] < p2[0] ? p1 : p2;
        r2 = p1[0] < p2[0] ? p2 : p1;
        return r1[1] > r2[0] || r1[0] === r2[0];
    }

    return function ( a, b ) {
        var pos1 = getPositions( a ),
            pos2 = getPositions( b );
        return comparePositions( pos1[0], pos2[0] ) && comparePositions( pos1[1], pos2[1] );
    };
})();

function detectOverlapping(div1, div2) {
    // code that detects if the box overlaps with a moving box
   if(overlaps(div1,div2)){
    	console.log(div1);
    	console.log(div2);
    }
}


var spawnKey = function(playerNum){
	var keyModel = $('<div class="key key-'+keyId+'"></div>');

	var fatherDiv = $('.led-input.player-'+playerNum);
	fatherDiv.append(keyModel);

	
	var actualKey = $('.led-input.player-'+playerNum).find('.key-'+keyId);
	var correspondingLed = $('.led-player.player-'+playerNum);
	actualKey.animate({
		right: '100%'
	},{
		duration : 5000,
		easing: "linear",
		step: function(){
			var keyX = actualKey.position().left;
			var ledX = correspondingLed.position().left;
			var ledWidth = correspondingLed.width();				
			if(keyX <=  ledX + ledWidth && keyX+15 >= ledX){
				correspondingLed.addClass('lighting');
				fireMakeyMakeyLeds(playerNum);
				$(document).keypress(function(event){
					switch(event.which){
						case 49: 
							if($(".led-player.player-1").hasClass('lighting')){
								keyOnTime(playerNum, actualKey);
								$('.led-input.player-1').toggleClass('glow',1000);
								
							}
							break;
						case 50: 
							if($(".led-player.player-2").hasClass('lighting')){
								keyOnTime(playerNum, actualKey);
								$('.led-input.player-2').toggleClass('glow',1000);
								
							}
							break;
						case 51: 
							if($(".led-player.player-3").hasClass('lighting')){
								keyOnTime(playerNum, actualKey);
								$('.led-input.player-3').toggleClass('glow',1000);
								
							}
							break;
						case 52: 
							if($(".led-player.player-4").hasClass('lighting')){
								keyOnTime(playerNum, actualKey);
								$('.led-input.player-4').toggleClass('glow',1000);
								
							}
							break;
						case 53: 
							if($(".led-player.player-5").hasClass('lighting')){
								keyOnTime(playerNum, actualKey);
								$('.led-input.player-5').toggleClass('glow',1000);
								
							}
							break;
						case 54: 
							if($(".led-player.player-6").hasClass('lighting')){
								keyOnTime(playerNum, actualKey);
								$('.led-input.player-6').toggleClass('glow',1000);
								
							}
							break;
					}
				});
			}else{
				$(".led-player.player-"+playerNum).removeClass('lighting');
			}
		},
		complete: function(){

			actualKey.stop();
			actualKey.remove();
			$('.led-input.player-1').find('.key').first()
		}
		});
	keyId += 1;
};

var keyOnTime = function(playerNum, key){
	$(".led-player.player-"+playerNum).removeClass('lighting');
	key.stop();
	key.remove();
	playKey(key);
	


}
var playKey = function(){
}

var fireMakeyMakeyLeds = function(playerNum){

}

var spawnRandomKey = function(){
	var num = Math.floor(Math.random()*6+1);
	spawnKey(num);
	window.setTimeout(spawnRandomKey,1000);
}

spawnRandomKey();