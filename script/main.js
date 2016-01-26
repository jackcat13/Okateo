 
$(document).ready(function(){

	//Sequencer object creation
	var sequencer = new Sequencer();

	$('.midiSelection').click(function(){
		sequencer.midiSong = $(this).text();
	});

	$('#play').click(function(){
		sequencer.play();
	});
});