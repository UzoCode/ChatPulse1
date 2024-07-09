const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize, User } = require('./models'); // If you are using Sequelize for database integration
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Import routes
const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');

// Use routes
app.use('/', indexRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);

// Example route to handle POST requests
app.post('/data', (req, res) => {
  const data = req.body;
  res.send(`You sent: ${JSON.stringify(data)}`);
});

// Sync database and start server (if using Sequelize)
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

