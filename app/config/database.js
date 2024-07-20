const config = require('./index');
var mysql = require('mysql');

var db = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.name
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting database: ' + err.stack);
        return;
    }
    console.log('Connected database as id ' + db.threadId);
});

module.exports = db;