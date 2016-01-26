<?php
  require_once("functions.php");
?>

<html>
  <head>
    <title>Okateo</title>
    <meta content="">
    <style></style>
    <script src="https://code.jquery.com/jquery-1.11.3.js"></script>
    <script type='text/javascript' src='http://www.midijs.net/lib/midi.js'></script>
    <script type='text/javascript' src='script/Sequencer.js'></script>
    <script type='text/javascript' src='script/main.js'></script>
  </head>
  <body>
  	<div id="content">
  		<div id="midiSongsList">
        <?php
          initSongsList();
        ?>
  		</div>

  		<button id="play">Play</button>
  	</div>
  </body>
</html>