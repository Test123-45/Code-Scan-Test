const express = require('express');
const serveStatic = require('serve-static');

const port = 3001;
const hostname = "0.0.0.0";  // Change to "localhost" if you only need local access

const app = express();

// Middleware to log requests and restrict non-GET requests
app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    console.log(`Method: ${req.method}`);
    console.log(`Path: ${req.path}`);
    console.log(`Query ID: ${req.query.id || "N/A"}`);

    if (req.method !== "GET") {
        res.type('.html');
        res.status(405).send("<html><body><h2>Error 405: Only GET requests are allowed!</h2></body></html>");
    } else {
        next();
    }
});

// Serve static files from "public" directory
app.use(serveStatic(__dirname + "/public"));

// Start the server
app.listen(port, hostname, () => {
    console.log(`🚀 Server is running at http://${hostname}:${port}/`);
});
