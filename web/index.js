// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const  server = http.createServer(function(req, res){
//     if(req.url == "/taobao"){
//         fs.readFile('views/taobao.html', function(err, data){
//             if(err){
//                 res.statusCode = 500;
//                 res.statusMessage = 'faild';
//                 return;
//             }
//             res.end(data);
//         })
//     }else if(req.url == '/baidu'){
//         fs.readFile('views/baidu.html', function(err, data){
//             if(err){
//                 res.statusCode = 200;
//                 res.statusMessage = 'ok';
//                 return;
//             }
//             res.end(data);
//         })
//     }else{
//         fs.readFile('views/404.html', function(err, data){
//             if(err){
//                 res.statusCode = 200;
//                 res.statusMessage = 'ok';
//                 return;
//             }
//             res.end(data);
//         })
//     }
// }) ;


// server.listen(3000)

const http = require("http");
const fs = require("fs");
const path = require("path");
const  server = http.createServer(function(req, res){
    if(req.url == "/taobao"){
        render("/taobao.html", res)
    }else if(req.url == "/baidu"){
        render("/baidu.html", res)
    }else if(req.url == "/"){
        render("/index.html", res)
    }else{
        render("/404.html".res)
    }
}) ;


server.listen(3000)
function render(fileName, res){
    fs.readFile(path.resolve(__dirname,'views',fileName),function(err, data){
        if(err){
            res.statusCode = 500;
            res.statusMessage = 'faild';
            return;
        }
        res.end(data)
    })
} 

//还有bug