require('dotenv').config();
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const app = express();
const port = 3000;

app.use(express.json());

app.get('/status', (req, res) => {
    res.status(200).json({
        status: 'sucess',
        message: 'ok'
    })
})

app.post('/login', (req, res) => {
    try {
        // res.send('login successfully');
        res.send(req.body);
    } catch(error){
        res.json({
            error: error.stack
        })
    }
})

app.listen(port, () => {
    console.log(`is Okay at ${port}`);
});