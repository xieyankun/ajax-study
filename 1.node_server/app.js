var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({
//     extended: false
// }));

// app.use(express.static(__dirname + '/src'));

app.all('/', function(req, res) {
    res.sendFile(__dirname + '/src/form.html');
    console.log('----------');
});

// 路由与业务逻辑
app.use('/route', require('./routes/routes-config.js'));

app.listen(8888, function(){
    console.log("服务器已起～～～")
})