const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();

const speciesRouter = require('./species/species-router');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/species', speciesRouter);

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
});

module.exports = server;
