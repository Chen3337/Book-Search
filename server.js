const express = require('express');
const mongoose = require('mongoose');
const routes = require('./route/route');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;


mongoose.connect(process.env.DB,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log(err)
    );

app.use(bodyParser.json());
app.use('/api', routes);
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
else {
    app.use((err, req, res, next) => {
        console.log(err);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
}
app.listen(port, () => { console.log('Server running on port ' + port) });