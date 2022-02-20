'use strict'
const express = require('express');
const serverless = require('serverless-http');
const pino = require('express-pino-logger')();
const redis = require('./redis');

const app = express();
const router = express.Router();

router.post('/addInvitee', async (req, res) => {
    console.log(req.body);
    const id = await redis.addInvitee(req.body);
    res.status(200).json({ id });
});

router.get('/createInviteeIndex', async (req, res) => {
    await redis.createInviteeIndex();
    res.status(200).send('invitee index created!');
});

router.get('/searchInvitees', async (req, res) => {
    const invitees = await redis.searchInvitees(req.query.first, req.query.last);
    res.status(200).json({ invitees });
});

router.get('/hello', async (req, res) => {
    res.status(200).json({ message: 'hello!' })
});

app.use(express.json());
app.use(pino);
app.use('/.netlify/functions/server', router);

// app.listen(3001, () => console.log('Express server is running on localhost:3001'));
module.exports = app;
module.exports.handler = serverless(app);
