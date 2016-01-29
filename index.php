<?php
require_once("functions.php");
?>

<html>
<head>
    <title>Okateo</title>
    <meta content="">
    <script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="script/jquery-2.2.0.min.js"></script>
    <script type='text/javascript' src='http://www.midijs.net/lib/midi.js'></script>
    <script type='text/javascript' src='script/Sequencer.js'></script>
    <script type='text/javascript' src='script/main.js'></script>

    <link href="/bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="/bower_components/bootstrap/dist/css/bootstrap-theme.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/bower_components/fancybox/source/jquery.fancybox.css" type="text/css" media="screen">
    <link rel="stylesheet" href="/bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <script type="text/javascript" src="/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
<?php include 'header.php'; ?>

<div id="content">
    <div id="midiSongsList">
        <?php
        initSongsList();
        ?>
    </div>

    <button id="play">Play</button>

    <div id="leds">
        <div class="led-input background player-1">
            <div class="button-player player-1">
                <div class="effect player-1">
                </div>
            </div>

            <div class="led-player player-1">
                <div class="led background player-1">
                </div>
            </div>


        </div>
        
        <div class="led-input background player-2">
            <div class="button-player player-2">
                <div class="effect player-2"></div>
            </div>

            <div class="led-player player-2">
                <div class="led background player-2">
                </div>
            </div>

        </div>

        <div class="led-input background player-3">
            <div class="button-player player-3">
                <div class="effect player-3"></div>
            </div>

            <div class="led-player player-3">
                <div class="led background player-3">
                </div>
            </div>
        </div>

        <div class="led-input background player-4">
            <div class="button-player player-4">
                <div class="effect player-4"></div>
            </div>

            <div class="led-player player-4">
                <div class="led background player-4">
                </div>
            </div>
        </div>

        <div class="led-input background player-5">
            <div class="button-player player-5">
                <div class="effect player-5"></div>
            </div>

            <div class="led-player player-5">
                <div class="led background player-5">
                </div>
            </div>
        </div>

        <div class="led-input background player-6">
            <div class="button-player player-6">
                <div class="effect player-6"></div>
            </div>

            <div class="led-player player-6">
                <div class="led background player-6">
                </div>
            </div>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>
</body>
<script type='text/javascript' src='script/effects.js'></script>
</html>