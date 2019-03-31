var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
let messages = ["haha"];

let waw = [{time:"23:32",user:"poop",message:"haha lol"},
           {time:"23:32",user:"poop",message:"haha lol"},]

router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    // res.send(messages)
    res.render(path.join(__dirname,'../client/web/index.html'));
    // res.send(JSON.stringify(waw,null,"     "))
    // res.json(waw)
});

router.get('/getlogs', function(req, res, next) 
{
    // res.render(path.join(__dirname,'../client/web/index.html'));
    res.header("Access-Control-Allow-Origin", "*");
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify({data:messages}));
    res.end();
});

router.get('/download', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    // res.send('https://ufile.io/r7fmj')
    try
    {
        let file ='./client/build/pythonfun.rar'
        console.log(file);
        res.download(file);
    }
    catch(err)
    {
        console.log(err)
    }
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
