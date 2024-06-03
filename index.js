const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080; // or 3000 if you prefer

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Registration API');
});

app.post('/register', (req, res) => {
    const { accountType, name, email, password, dateOfBirth } = req.body;

    if (!accountType || !name || !email || !password || !dateOfBirth) {
        return res.status(400).json({ error: 'All fields are required' });
    }

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

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
