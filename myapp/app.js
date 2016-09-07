/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var path = require('path');

var urlencodedParser = bodyParser.urlencoded({extended : false});

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

require('./app/routes.js')(app);

var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('listening at ', host, port);
//    console.log(_dirname);
});
