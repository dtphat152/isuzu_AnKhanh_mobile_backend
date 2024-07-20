const app = require('./app');
const config = require('./app/config');
var mysql = require('mysql');

async function startServer() {
    try {
        var con = mysql.createConnection({
            host: config.db.host,
            user: config.db.user,
            password: config.db.password,
            database: config.db.name
        });
        await con.connect();
        console.log("Connected database!");
        const PORT = config.app.port;
        app.listen(PORT, () => { 
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log("Can not connected database!", error);
        process.exit();
    }
};

startServer();