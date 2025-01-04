require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
// MongoDB connection URI from environment variable
const uri = process.env.MONGODB_URI;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint to add a user
app.post('/add-user', async (req, res) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const database = client.db("affafghani");
        const collection = database.collection("testCollection");

        const user = req.body; // Get user data from the request body

        const result = await collection.insertOne(user);  // Insert the user data
        res.json({ message: 'User added successfully!', userId: result.insertedId });
    } catch (err) {
        console.error('Error adding user:', err);
        res.status(500).json({ error: 'An error occurred while adding the user.' });
    } finally {
        await client.close();
    }
});

// Endpoint to get all users
app.get('/get-users', async (req, res) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const database = client.db("testdb");
        const collection = database.collection("testCollection");

        const users = await collection.find({}).toArray();  // Get all users
        res.json(users);
    } catch (err) {
        console.error('Error retrieving users:', err);
        res.status(500).json({ error: 'An error occurred while retrieving users.' });
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
