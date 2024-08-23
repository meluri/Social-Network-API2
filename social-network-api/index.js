const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); // Import routes

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialNetworkDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Use the routes
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});