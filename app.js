require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.get('/status', (req, res) => {
    res.status(200).json({
        status: 'sucess',
        message: 'ok'
    })
})

app.listen(port, () => {
    console.log(`is Okay at ${port}`);
});


