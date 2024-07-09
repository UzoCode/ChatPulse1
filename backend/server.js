const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models'); // If using Sequelize for database
const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev')); // for logging

// Routes
app.use('/', indexRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);

// Example route to handle POST requests
app.post('/api/data', (req, res) => {
  const data = req.body;
  // Process data and send response
  res.json({ message: 'Data received successfully', data });
});

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
