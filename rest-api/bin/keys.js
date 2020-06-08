'use strict'

const mysql = require('mysql');

const conn = mysql.createPool({
	host: process.env.host,
	user: process.env.user,
	database: process.env.database,
	password: process.env.password
});

module.exports = conn;