// import core nodeJs Modules 
const http = require('http');
const fs = require('fs');
const path  = require('path');



// Response Function 
const sendResponse = (res, content, statusCode = 200) => {
    res.writeHead(statusCode, {'Content-Type': 'text/plain'});
    res.end(content)
}



// Route Handler 
const handleHome = (res) => sendResponse(res, 'This is the Home Page');
const handleAbout = (res) => sendResponse(res, 'This is the About Page');
const handleContact = (res) => sendResponse(res, 'This is the Contact Page');

const handleFileWrite = (res) => {
    fs.writeFile(path.join(__dirname, 'demo.txt'), 'Hello Server with File Write', (err) => {
        sendResponse(res, err ? 'Error writing file' : 'File has been written ', err ? 500 : 200)
    })
}

