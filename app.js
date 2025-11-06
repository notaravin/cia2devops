const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Azure CI/CD Pipeline! Version 1.0');
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date() });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App listening on port ${port}`);
});
