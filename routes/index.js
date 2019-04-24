var express = require('express');
var router = express.Router();
const path = require('path');
let logs = require('../logs.json');
let users = require('../users.json');
let fs = require('fs');


// console.log(logs);
/* GET home page. */
// let messages = ["haha"];

let waw = [{time:"23:32",user:"poop",message:"haha lol"},
           {time:"23:32",user:"poop",message:"haha lol"},]


// users = ["waw","bamba","lol"];

const downloadlink = "https://ufile.io/1oujk";

router.get('/', function(req, res, next) {
    // res.render(path.join(__dirname,'../client/web/index.html'));
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
            res.write(JSON.stringify({status:true}));
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
    // res.send("https://ufile.io/1oujk")
    res.header("Access-Control-Allow-Origin", "*");
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify({link:downloadlink}));
    res.end();
})

router.post('/newmessage', (req,res)=>
{
    console.log(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify({status:true}));
    res.end();
    // messages.push(req.body.msg);
    append('logs.json',req.body.msg);
});

// router.get('/newmessage', (req,res)=>
// {
//     console.log(req.body);
//     res.header("Access-Control-Allow-Origin", "*");
//     res.writeHead(200, {"Content-Type": "application/json"});
//     res.write(JSON.stringify({status:true}));
//     res.end();
//     // messages.push(req.body.msg);
//     append('logs.json',req.body.msg);
// });

router.post('/inituser', (req,res)=>
{
    console.log(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify({status:true}));
    res.end();
    // messages.push(req.body.msg);
    append('logs.json',"User "+req.body.user+ " is under radar now.");
    append('users.json',req.body.user);
    console.log("User "+req.body.user+ " is under radar now.")
});

router.get('/users', (req, res)=> {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.writeHead(200, {"Content-Type": "application/json"});
    // res.write(JSON.stringify({users:users}));
    // res.end();
    console.log(users);

    fs.readFile('users.json','utf8', (err,data)=>
    {
        if(err)
            console.log(err);
        else
        {
            res.header("Access-Control-Allow-Origin", "*");
            res.writeHead(200, {"Content-Type": "application/json"});
            let shit = JSON.parse(data)
            console.log(shit);
            res.write(JSON.stringify({users:shit}));
            res.end();
        }
    }); 
    // res.send("https://ufile.io/1oujk")
})

router.post('/removeuser', (req, res)=> {
    console.log(req.body);
    let user = req.body.user;
    console.log("WAWAWAWAWAWAW" +user);

    fs.readFile('users.json','utf8', (err,data)=>
    {
        if(err)
            console.log(err);
        else
        {
            let shit = JSON.parse(data);
            shit.splice(shit.indexOf(user),1);
            // json = "[]"
            fs.writeFile('users.json', JSON.stringify(shit), 'utf8', (err)=>
            {
                console.log(user);

                if(err) console.log(err)
                else
                {
                    res.header("Access-Control-Allow-Origin", "*");
                    res.writeHead(200, {"Content-Type": "application/json"});
                    res.write(JSON.stringify({status:true}));
                    res.end();
                    append('logs.json',"User "+user+ " will be removed from the radar on his next message.");
                }
            });
        }
    }); 
    // users.splice(users.indexOf(user),1);
    // users.splice(req.params.index,1);
    
    // res.send("https://ufile.io/1oujk")
})

function append(where,message)
{
    fs.readFile(where,'utf8', (err,data)=>
    {
        if(err)
            console.log(err);
        else
        {
            obj = JSON.parse(data);
            obj.push(message)
            str = JSON.stringify(obj);
            fs.writeFile(where,str,'utf8',(err)=>{ if(err) console.log(err)});
        }
    }); 
}

module.exports = router;
