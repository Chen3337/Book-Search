const express = require('express');
const mongoose = require('mongoose');
// require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// app.use(logger('dev'));

app.use((err, req, res, next) => {
    console.log(err);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(port, () => { console.log('Server running on port ' + port) });