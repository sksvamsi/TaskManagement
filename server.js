const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const port = 3001;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection URI and Database Name
const uri = 'mongodb://localhost:27017';
const dbName = 'student_tasks';

// Middleware to connect to MongoDB
app.use(async (req, res, next) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    req.dbClient = client;
    req.db = client.db(dbName);
    next();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to submit task
app.post('/submitTask', async (req, res) => {
  // Implement task submission logic here
});

// Route to retrieve tasks for a specific course
app.get('/courses/:courseId/tasks', async (req, res) => {
  // Implement route logic here
});

// Default route for serving the HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
