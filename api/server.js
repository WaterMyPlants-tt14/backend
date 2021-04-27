const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();

const speciesRouter = require('./species/species-router');
const userPlantsRouter = require('./userPlants/userPlants-router');
const authRouter = require('./auth/auth-router.js')
const userRouter = require('./users/users-router');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/species', speciesRouter);
server.use('/api/userplants', userPlantsRouter);
server.use('/api/users', userRouter);
server.use('/api/auth', authRouter)

server.use('/', (req, res, next) => {
  res.status(200).json({message: `Welcome to the WMP💦 API!`});
});

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
