const http = require('http');
const fs = require('fs');

// Write data to a file
fs.writeFileSync('example.txt', 'This is a sample text file created by Node.js');

// Create HTTP server
const server = http.createServer((req, res) => {
  fs.readFile('example.txt', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error reading file');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    }
  });
});

// Server listening on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
