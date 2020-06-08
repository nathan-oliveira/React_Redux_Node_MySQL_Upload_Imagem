'use strict'

require('dotenv').config();
const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const consign = require('consign')

const app = express();

app.use(cors());

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json({ limit: '20mb', extended: true }));

// app.use('/public', express.static(__dirname + '/public'));
app.use(express.static('public'));

consign()
  .include('src/routes')
  .into(app)

module.exports = app;