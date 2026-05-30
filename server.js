const express = require('express');
const app = express();
app.use(express.json());

let latestAnswer = "Warte auf Antwort...";

app.post('/answer', (req, res) => {
  latestAnswer = req.body.text;
  res.json({ success: true });
});

app.get('/answer', (req, res) => {
  res.json({ text: latestAnswer });
});

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body><article><p>${latestAnswer}</p></article></body></html>`);
});

app.listen(3000, () => console.log('Server läuft!'));
