const express = require('express');
const routes = require('./routes');
const handleError = require('./middlewares/handleError');

const db = require('./database');

const app = express();
const SERVER_PORT = 3000

db.hasConnection();

app.use(express.json())
app.use(routes);
app.use(handleError);

app.listen(SERVER_PORT, () => {
    console.log(`running at localhost:${SERVER_PORT}`)
});