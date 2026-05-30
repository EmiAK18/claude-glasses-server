const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
let latestAnswer = "Warte auf Antwort...";
app.post('/answer', (req, res) => {
  latestAnswer = req.body.text;
  res.json({ success: true });
});
app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body><p>${latestAnswer}</p></body></html>`);
});
app.listen(3000, () => console.log('Server läuft!'));
