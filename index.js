const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080; // or 3000 if you prefer

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Registration API');
});

// Registration route
app.post('/register', (req, res) => {
    const { accountType, name, email, password, dateOfBirth } = req.body;

    // Basic validation (you can add more advanced validation here)
    if (!accountType || !name || !email || !password || !dateOfBirth) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Here you could add code to save the user to a database

    // Response
    res.json({
        message: 'Registration successful',
        data: {
            accountType,
            name,
            email,
            dateOfBirth
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
