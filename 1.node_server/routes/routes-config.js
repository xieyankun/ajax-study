var express = require('express');
var router = express.Router();

// router.all('/', function(req, res) {
//     res.sendFile(__dirname + '/../src/index.html');
//     console.log('----------');
// });

router.use('/list', function(req, res) {
    
    console.log(req.method);
    // res.send('hello');
});

router.get('/fb', function(req, res) {
    res.status(403).send('^_^ forbidden!');
});





module.exports = router;
