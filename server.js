// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use /public as static asset directory
app.use(express.static(__dirname + '/public'));

// user /public/views as default directory for views
app.set('views', __dirname + '/public/views');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) 
{
    res.render('pages/index');
});

// about page 
app.get('/projects', function(req, res) 
{
    res.render('pages/projects');
});

// default page for bad page requests
app.get('*', function(req, res) {
    res.redirect('/');
});

app.listen(8080);
console.log('8080 is the magic port')