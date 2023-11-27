require('dotenv').config();
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const app = express();
const port = 3000;
const keySession = 440457;

app.use(express.json());

const store = session.MemoryStore();

app.use(session({
    saveUninitialized: false,
    secret: keySession,
    cookie: {
        maxAge: 1000 * 10 // 1s * 10
    },
    store
}))

app.use(passport.initialize());
app.use(passport.session());

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