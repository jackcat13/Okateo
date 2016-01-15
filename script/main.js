 
$(document).ready(function(){

	//Sequencer object creation
	var sequencer = new Sequencer('midi/chocobo.mid');

	$('#play').click(function(){
		sequencer.play();
	});
});