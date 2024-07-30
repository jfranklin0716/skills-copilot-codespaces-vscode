// Create web server
// Create a web server that listens for requests on port 3000. When a request is made to the server, the server should respond with the following HTML content:

// <!DOCTYPE html>
// <html>
// <head>
// <title>Hello, World!</title>
// </head>
// <body>
// <h1>Hello, World!</h1>
// </body>
// </html>
// Respond with a status code of 200.

// Hint: You can use the createServer method from the http module to create a server. The method takes a callback function that is called each time a request is made to the server.

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>Hello, World!</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Hello, World!</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});