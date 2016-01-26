var readline = require('readline');
var SerialPort = require('serialport').SerialPort;

var serialPort, rl, port;

init();

function init (){
	port = getPortFromCommandLineParams();

	if(port){
		serialPort = new SerialPort(port, {
		  baudrate: 9600
		}, false);
		serialPort.open(onSerialOpened);

		rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});
		rl.on('line', onStdinLine);
	}
}

function getPortFromCommandLineParams(){
	if(process.argv.length == 3){
		return process.argv[2];
	} else {
		usage();
		return null;
	}
}

function onSerialOpened (error){
	if(error){
		console.error('Can\'t open port '+ port +' : '+ error);
	} else {
		console.log('Listening on serial port '+ port);
		serialPort.on('data', function(data) {
			console.log('Data received: ' + data);
		});
	}
}

function onStdinLine (data){
	if(data.toString() === 'exit'){
		console.log('Closing serial port '+ port +' ...');
		serialPort.close();
		console.log('Closing process.stdin ...');
		rl.close();
	}
	if(serialPort.isOpen()){
		serialPort.write(data.toString(), function(err, results){
			if(err){
				console.log('An error occured : '+err);
			}
		});
	}
}

function usage (){
	console.log('Usage : node main.js <serial_port_number>');
}