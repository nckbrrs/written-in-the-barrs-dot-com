// const express = require('express');
// const pino = require('express-pino-logger')();
// const redis = require('./redis');
//
// const app = express();
// app.use(express.json());
// app.use(pino);
//
// app.post('/api/addInvitee', async (req, res) => {
//     console.log(req.body);
//     const id = await redis.addInvitee(req.body);
//     res.status(200).json({ id });
// });
//
// app.get('/api/createInviteeIndex', async (req, res) => {
//     await redis.createInviteeIndex();
//     res.status(200).send('invitee index created!');
// });
//
// app.get('/api/searchInvitees', async (req, res) => {
//     const invitees = await redis.searchInvitees(req.query.first, req.query.last);
//     res.status(200).json({ invitees });
// });
//
//
// app.listen(3001, () => console.log('Express server is running on localhost:3001'));
