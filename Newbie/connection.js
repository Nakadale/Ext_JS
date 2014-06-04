/* express.JS */
var express = require('express'),
    http = require('http'),
    app = express(),
    httpServer = http.createServer(app);
 
var bodyParser = require('body-parser');
app.use(bodyParser());
 
    app.set('port', 8080);
    app.use(express.static(__dirname));
 
	app.post('/save',function(req, res) {  
		
		//console.log (req.body.firstname);
		//res.json();
		res.send(req.body.firstname + " " + req.body.lastname);
	});
 
 
 
httpServer.listen(app.get('port'), function () {
    console.log("Express server listening on port %s.", httpServer.address().port);
});
