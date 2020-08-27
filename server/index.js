require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env;
const ctrl = require('./controller');

const app = express();

app.use(express.json());

massive({connectionString: CONNECTION_STRING,
    ssl:{rejectUnauthorized: false}
    }).then(db => {app.set('db',db)
    console.log('database has connected successfully')
    }).catch(err => console.log(err));

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000*60*60*24*14
    }
}));

app.post('/auth/register', ctrl.register);
app.post('/auth/login', ctrl.login);

app.listen (SERVER_PORT, () => console.log(`server is listening successfully on port ${SERVER_PORT}`))