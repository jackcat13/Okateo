/*$.(document).ready(function(){
	console.log("Time to Smatch BUTTONS !");
	prepareKeyboardEvents();
});*/

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
