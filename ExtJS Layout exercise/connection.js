/* express.JS */
var express = require('express'),
    http = require('http'),
    app = express(),
    httpServer = http.createServer(app);
 
var bodyParser = require('body-parser');
app.use(bodyParser());
 
    app.set('port', 8080);
    app.use(express.static(__dirname));
  


	//get 1 user
 	app.get('/app/users/:id',function(req, res) {  
		
	// res.send(id);
		res.send(req.params.id);
	//
	//
	//	res.send(req.method + ' Request Completed.');
	//	console.log ('get');
	});
 	
	//list of female users
	app.get('/app/users',function(req, res) {  
		//res.send(req.method + ' Request Completed.');
		//	console.log ('get');
		// var filter = [{ id: 'user1',sex: 'f' } ,  { id: 'user2',sex: 'f' } , { id: 'user3',sex: 'm' } ,  { id: 'user4',sex: 'm' } ];
		res.send( req.query.filter );
	
	});
		
	//list of users
 	app.get('/app/users',function(req, res) {  
		res.send(req.method + ' Request Completed.');
		console.log ('get');
	});
	
	app.post('/app/users',function(req, res) {
		res.send(req.method + ' Request Completed.');
		console.log ('post');
	});

  	app.put('/app/users',function(req, res) {  
		res.send(req.method + ' Request Completed.');		
		console.log ('put');
	});
 
  	app.delete('/app/users',function(req, res) {  
		res.send(req.method + ' Request Completed.');		
		console.log ('delete');
	});


 
httpServer.listen(app.get('port'), function () {
    console.log("Express server listening on port %s.", httpServer.address().port);
}); 
