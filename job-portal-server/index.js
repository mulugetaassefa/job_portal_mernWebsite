const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const { MongoClient } = require('mongodb');

// Middleware
app.use(express.json());
app.use(cors());

// Database connection setup
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();

    // Create database and collection
    const db = client.db('mernJobPortal');
    const jobsCollection = db.collection('demoJob');

    // POST job
    app.post('/post-job', async (req, res) => {
      const body = req.body;
      body.createdAt = new Date();
      const result = await jobsCollection.insertOne(body);
      if (result.insertedId) {
        return res.status(200).send(result);
      } else {
        return res.status(404).send({
          message: 'Cannot insert job! Please try again later.',
          status: false,
        });
      }
    });

    // GET all jobs
    app.get('/all-jobs', async (req, res) => {
      const jobs = await jobsCollection.find({}).toArray();
      res.send(jobs);
    });

    const database = client.db('admin');
    await database.command({ ping: 1 });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});