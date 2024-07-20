const db = require('../config/database');

const getKHByName = async (tenKH) => { 
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM KHACH_HANG WHERE TEN = ?`, [tenKH], (err, results) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(results[0]);
            }
        });
    });
}

module.exports = {
    getKHByName
 }