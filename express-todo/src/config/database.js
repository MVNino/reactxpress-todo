const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: '127.0.0.1',
    database: 'todo',
    user: 'root',
    password: '',
})

module.exports = connection