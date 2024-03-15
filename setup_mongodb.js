const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017';
const dbName = 'student_tasks';

async function setupMongoDB() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const db = client.db(dbName);
    // Create 'courses' collection
    await db.createCollection('courses');
    console.log('Created collection: courses');
    // Create 'tasks' collection
    await db.createCollection('tasks');
    console.log('Created collection: tasks');
    console.log('MongoDB setup complete.');
  } catch (err) {
    console.error('Error setting up MongoDB:', err);
  } finally {
    await client.close();
  }
}

setupMongoDB();
