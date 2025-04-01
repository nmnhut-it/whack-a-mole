// Simple Node.js server to serve the Whack-a-Whale game files
const express = require('express');
const path = require('path');
const fs = require('fs');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Set up static file serving
app.use(express.static(__dirname));
app.use(express.static(__dirname+"/libs"));

// Log all requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`
Server running at http://localhost:${PORT}
-----------------------------------
Game available at:
- http://localhost:${PORT}/
-----------------------------------
File structure detected:
- ${fs.existsSync('./index.html') ? '✓' : '✗'} index.html
- ${fs.existsSync('./game.js') ? '✓' : '✗'} game.js
- ${fs.existsSync('./resource.js') ? '✓' : '✗'} resource.js
- ${fs.existsSync('./libs/cocos2d-js-v3.13.js') ? '✓' : '✗'} libs/cocos2d-js-v3.13.js
- ${fs.existsSync('./resource/background.png') ? '✓' : '✗'} resource/background.png
- ${fs.existsSync('./resource/whale.png') ? '✓' : '✗'} resource/whale.png
-----------------------------------
Server startup complete!
  `);
});