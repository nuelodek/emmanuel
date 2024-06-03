const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080; 

app.use(bodyParser.json());

app.post('/signin', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    res.json({ message: 'Authentication successful', email, password });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
