# node-js-assignment-1
First Node.js practical: Installation, Hello World, and Basic HTTP Server 
# Node.js Assignment 1

## 📌 Student Info
- Name: Dipanshu  
- Student ID: GF202345540  

---

## 🔹 Task 1: Install Node.js
- Installed Node.js LTS version on Windows.
- Verified installation using:
  ```bash
  node -v
  npm -v

Task 2: First Program

Created app.js file:
console.log("Hello world.");
Ran with:
node assignment 1.js

Task 3: Basic HTTP Server

Created server.js file:
const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to Window 1</h1>");
    res.write("<h2>This is Window 2</h2>");
    res.write("<h3>This is Window 3</h3>");
    res.end();
}).listen(3000);

console.log("Server running at http://localhost:3000/");

Run with: node server.js
Open browser → http://localhost:3000
