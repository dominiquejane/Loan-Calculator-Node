var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

var interest = function() {
	return ((Math.random() * (0.2 - 0.01 + 0.01)) + 0.01).toFixed(2);
};

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));

app.listen(8080);

app.get('/interest_rate', function(req, res) {
	res.json({
		interest_rate: interest(),
	});
});