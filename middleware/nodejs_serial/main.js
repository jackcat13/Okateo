const DEBUG = true;

var readline = require('readline');
var SerialPort = require('serialport').SerialPort;
var http = require('http');
var url = require('url');

var serialPort, rl, port, httpServer;
var httpPort = 8008;

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

		httpServer = http.createServer(requestHandler);
		httpServer.listen(httpPort, 'localhost', null, onHttpServerStarted);

		console.log('Application is starting ...\n');
		console.log('Type \'stop\' to terminate the process\n');
	}
}

function requestHandler(request, response){
	var path = url.parse(request.url).path;
	if(path.indexOf('/led') == 0){
		var idLed = path.split('/')[2];
		writeToSerial(''+idLed);
		response.statusCode = 200;
	} else {
		response.statusCode = 404;
	}
	response.end();
}

function getPortFromCommandLineParams(){
	if(process.argv.length == 3){
		return process.argv[2];
	} else {
		usage();
		return null;
	}
}

function onHttpServerStarted(){
	console.log('Http server listening on port '+ httpPort);
}

function onSerialOpened (error){
	if(error){
		console.error('Can\'t open port '+ port +' : '+ error);
	} else {
		console.log('Listening on serial port '+ port);
		if(DEBUG){
			serialPort.on('data', function(data) {
				console.log('Data received: ' + data);
			});
		}
	}
}

function writeToSerial (data){
	if(serialPort.isOpen()){
		serialPort.write(data, function(err, results){
			if(err){
				console.log('An error occured : '+err);
			}
		});
	}
}

function onStdinLine (data){
	if(data.toString() === 'stop'){
		console.log('Closing serial port '+ port +' ...');
		serialPort.close();
		console.log('Closing process.stdin ...');
		rl.close();
		console.log('Stoping http server ...');
		httpServer.close();
		process.exit(0);
	}
}

function usage (){
	console.log('Usage : node main.js <serial_port_name>');
}