var express = require('express');
var router = express.Router();

/* GET home page. */
let messages = [];

let waw = [{time:"23:32",user:"poop",message:"haha lol"},
           {time:"23:32",user:"poop",message:"haha lol"},]

router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.send(messages)
    // res.send(JSON.stringify(waw,null,"     "))
    // res.json(waw)
});

router.get('/download', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.send('https://ufile.io/i8c3j')
});

router.post('/newmessage', (req,res)=>
{
    console.log(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify({status:true}));
    res.end();
    messages.push(req.body.msg);
});

module.exports = router;
