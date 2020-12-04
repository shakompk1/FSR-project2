const mysql = require('mysql');
const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path')

const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
})
app.listen(port, () => { console.log('Serve online') })