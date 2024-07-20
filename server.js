const app = require('./app');
const config = require('./app/config');
const db = require('./app/config/database');

async function startServer() {
    try {
        await db;
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