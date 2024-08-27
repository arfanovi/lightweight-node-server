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







// Create Http Server 
const server = http.createServer((req, res)=>{
    const routes = {
        '/' : handleHome,
        '/about': handleAbout,
        '/contact': handleContact,
        '/fileWrite': handleFileWrite,
    };
    
    const handler = routes[req.url] || ((res) => sendResponse(res, 'Page Not Found', 404));
    handler(res)
})



// Run 
server.listen(3001, ()=>{
    console.log('Server is running')
})