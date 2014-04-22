
/**
 * Module dependencies.
 */

 var express = require('express');
 var routes = require('./routes');
 var user = require('./routes/user');
 var http = require('http');
 var path = require('path');

 var app = express();


 var mongoose = require('mongoose');

 mongoose.connect('mongodb://laminasUser:qwerty123@oceanic.mongohq.com:10065/laminasData');


 var Schema = mongoose.Schema;

 var Laminas = mongoose.model('LaminasCollection', {  
 	numero: Number,  
 	laTengo: Boolean,  
 	cuantas: Number
 });  



// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);


app.get('/api/laminas', function(req, res) {
	Laminas.find(function(err, laminas) {

		if (err)
			res.send(err)

		res.json(laminas);
	});
});

app.post('/api/laminas/:numero/:laTengo/:cuantas', function(req, res) {

	Laminas.create({
		numero : req.params.numero,
		laTengo : req.params.laTengo,
		cuantas : req.params.cuantas
	}, function(err, lamina) {
		if (err)
			res.send(err);
		Laminas.find(function(err, laminas) {
			if (err)
				res.send(err)
			res.json(laminas);
		});
	});

});

app.put('/api/laminas/:id/:laTengo/:cuantas', function(req, res) {

	Laminas.findByIdAndUpdate(req.params.id, {$set: {laTengo:req.params.laTengo, cuantas:req.params.cuantas}}, function(err, Lamina) {
		if (!err) {
			Laminas.find(function(err, laminas) {
				if (err)
					res.send(err)
				res.json(laminas);
			});
		};
	});		
});




http.createServer(app).listen(app.get('port'), function(){
	console.log('Escuchando en el puerto ' + app.get('port'));
});
