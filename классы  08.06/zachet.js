const fs = require("fs");
const http = require("http");
const url = require('url');
const express = require('express');
const app=express();




const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if (request.url === "/requests" || request.url === "/") {
        let content = fs.readFileSync("birthday.txt");
        response.writeHead(200, {
            'Content-Type': 'text/txt'
        })
        response.write(content);
   
    }
    else{
        app.use((request,response,next)=>{
            console.log(request.url);
            fs.writeFile('birthday.txt', request.url, function (err) {
                if (err) return console.log(err);
                console.log('file has created');
            next();
        
        });
        });  
    }


};

http.createServer(requestHandler).listen(3000); 














