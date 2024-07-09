const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Root route
app.get('/', (req, res) => {
  res.send('Hello, ChatPulse!');
});

// Additional routes
app.get('/about', (req, res) => {
  res.send('About ChatPulse');
});

app.get('/contact', (req, res) => {
  res.send('Contact Us at ChatPulse');
});

// Example route to handle POST requests
app.post('/data', (req, res) => {
  const data = req.body;
  res.send(`You sent: ${JSON.stringify(data)}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
