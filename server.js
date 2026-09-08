const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve the static files of the current folder
app.use(express.static(__dirname));

// Main route to serve the index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});