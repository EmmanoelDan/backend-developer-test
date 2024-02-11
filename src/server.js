const express = require('express');
const routes = require('./routes/routes');
const { connectDB } = require('./database/database');

const server = express();

connectDB();

server.use(express.json())
server.use(express.urlencoded({extended: true}));

server.use(routes);

server.listen(3000, () => {
    console.log('Server listening on port 3000');
})