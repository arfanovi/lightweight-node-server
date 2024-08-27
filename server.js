// import core nodeJs Modules 
const http = require('http');
const fs = require('fs');
const path  = require('path');



// Response Function 
const sendResponse = (res, content, statusCode = 200) => {
    res.writeHead(statusCode, {'Content-Type': 'text/plain'});
    res.end(content)
}

