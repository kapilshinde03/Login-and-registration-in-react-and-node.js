const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors());

app.use(express.json());
const JWT_SECRET = 'protectedtable';
const mongoUrl = 'mongodb://localhost:27017';  
const dbName = 'employee';
let db;
const client = new MongoClient(mongoUrl); 

// Connect to MongoDB
async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        db = client.db(dbName); 
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

// Insert Data
async function insertData(data) {
    if (!db) {
        console.error('Database not initialized');
        return;
    }
    try {
        const collection = db.collection('user'); 
        const result = await collection.insertOne(data);
        console.log('Data inserted:', result.insertedId);
    } catch (err) {
        console.error('Error inserting data:', err);
    }
}



// Register-API
app.post('/register', async (req, res) => {
    const { name, dob, email, password } = req.body;
    const user = { name, dob, email, password };
    try {
        await connectDB();
        const existingUser = await db.collection('user').findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already registered' });
        }
        await insertData(user);
        const newUser = await db.collection('user').findOne({ email});
        const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ message: 'User registered successfully', token, user: { username: user.name, email: user.email, dob:user.dob } });
    } catch (error) {
        res.status(500).json({ message: 'Registration failed' });
    }
});

// Login-API
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    await connectDB();
    const user = await db.collection('user').findOne({ email, password });
    if (user) {
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({message: 'User LogIn successfully', token, user: { username: user.name, email: user.email, dob:user.dob } });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

app.listen(5000, () => console.log('Server started on port 5000'));