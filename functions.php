<?php
	//Print all midi songs on the server
	function initSongsList(){
		$dir = new DirectoryIterator("midi");
		foreach ($dir as $file) {
			if (!$file->isDot()){
		    	echo "<div><a class='midiSelection' href='#'>midi/".$file."</a></div>";
		    }
		}
	}
?>