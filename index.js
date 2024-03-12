const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to expressjs')
})

app.get('/about', (req, res) => {
    res.send('This is the about page route')
})

app.listen(3000, () => {
    console.log('server is running on port 3000...')
})