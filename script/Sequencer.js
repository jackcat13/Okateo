//class definition
function Sequencer () {

	this.midiSong="";

	//Method to import a midi song on the server
	this.import = function(){

	}

	//Method to play the song stored in midiSong attribute
	this.play = function(){
		MIDIjs.play(this.midiSong);
	};
}
