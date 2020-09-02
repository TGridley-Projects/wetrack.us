require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env;
const authctrl = require('./controllers/authController');
const ctrl = require('./controllers/controller');

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

app.post('/auth/register', authctrl.register);
app.post('/auth/login', authctrl.login);
app.post('/auth/logout', authctrl.logout);
app.post('/api/main_workout', ctrl.addMain);
app.post('/api/other_workout', ctrl.addOther);
app.get('/api/mainworkouts5', ctrl.mainWorkouts5);
app.get('/api/otherworkouts5', ctrl.otherWorkouts5);
app.get('/api/publicprofile/:userid', ctrl.publicProfile);

app.listen (SERVER_PORT, () => console.log(`server is listening successfully on port ${SERVER_PORT}`))