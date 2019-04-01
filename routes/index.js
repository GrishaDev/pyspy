var express = require('express');
var router = express.Router();
const path = require('path');
let logs = require('../logs.json');
let fs = require('fs');

// console.log(logs);
/* GET home page. */
// let messages = ["haha"];

let waw = [{time:"23:32",user:"poop",message:"haha lol"},
           {time:"23:32",user:"poop",message:"haha lol"},]

router.get('/', function(req, res, next) {
    res.render(path.join(__dirname,'../client/web/index.html'));
});

router.get('/getlogs', function(req, res, next) 
{
    fs.readFile('logs.json','utf8', (err,data)=>
    {
        if(err)
            console.log(err);
        else
        {
            res.header("Access-Control-Allow-Origin", "*");
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write(data);
            res.end();
        }
    }); 
});

router.get('/clearlogs', function(req, res, next) 
{
    // messages = [];
    json = "[]"
    fs.writeFile('logs.json', json, 'utf8', (err)=>
    {
        if(err) console.log(err)
        else
        {
            res.header("Access-Control-Allow-Origin", "*");
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write(JSON.stringify({result:"Cleared logs."}));
            res.end();
        }
    });
});

router.get('/download', function(req, res, next) {
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
})

router.get('/downloadlink', function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.writeHead(200, {"Content-Type": "application/json"});
    // res.write(JSON.stringify({result:"Cleared logs."}));
    // res.end();
    res.send("https://ufile.io/8ykqn")
})

router.post('/newmessage', (req,res)=>
{
    console.log(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify({status:true}));
    res.end();
    // messages.push(req.body.msg);
    append(req.body.msg)
});

function append(message)
{
    fs.readFile('logs.json','utf8', (err,data)=>
    {
        if(err)
            console.log(err);
        else
        {
            obj = JSON.parse(data);
            obj.push(message)
            str = JSON.stringify(obj);
            fs.writeFile('logs.json',str,'utf8',(err)=>{ if(err) console.log(err)});
        }
    }); 
}

module.exports = router;
