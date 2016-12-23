const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

app.set('port', (process.env.PORT || 5000));

nunjucks.configure('views', { noCache: true });
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.get('/', (req, res, next) => {
	res.render('pages/index');
});

app.get('/squat', (req, res, next) => {
	res.render('pages/squat');
});

app.get('/bench', (req, res, next) => {
	res.render('pages/bench');
});

app.get('/deadlift', (req, res, next) => {
	res.render('pages/deadlift');
});

app.get('/row', (req, res, next) => {
	res.render('pages/row');
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});
