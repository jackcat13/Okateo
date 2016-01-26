<?php
require_once("functions.php");
?>

<html>
<head>
    <title>Okateo</title>
    <meta content="">
    <script type='text/javascript' src='http://www.midijs.net/lib/midi.js'></script>
    <script type='text/javascript' src='script/Sequencer.js'></script>
    <script type='text/javascript' src='script/main.js'></script>
    <link href="/bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="/bower_components/bootstrap/dist/css/bootstrap-theme.min.css" rel="stylesheet">
    <script type="text/javascript" src="/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
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