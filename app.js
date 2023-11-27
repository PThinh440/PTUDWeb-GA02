require('dotenv').config();
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const app = express();
const port = 3000;
const keySession = "440457";
const user = {
    username: "Thinh",
    password: "440"
}

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

app.post('/login', passport.authenticate('local', {
    successRedirect: '/protected',
    failureRedirect: '/login'
}), (req, res) => {
    try {
        // res.send('login successfully');
        res.send(req.body);
    } catch(error){
        res.json({
            error: error.stack
        })
    }
})

passport.use( new LocalStrategy( (username, password, done) => {
    console.log(`username:::${username}, pass:::${password}`);
    
    if (username === user.username && password === user.password){
        return done(null, {
            username,
            password,
            active: true
        })
    } 
    done(null, false);
}))

passport.serializeUser((user, done) => done(null, user.username));

passport.deserializeUser((username, done) => {
    if (username === user.username){
        return done(null, {
            username,
            active: true
        })
    }
    done(null, false);
})



app.listen(port, () => {
    console.log(`is Okay at ${port}`);
});