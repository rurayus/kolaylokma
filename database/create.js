require("dotenv").config();

const mysql = require('mysql2/promise');
const { DB_HOST, DB_USER, DB_NAME, DB_PASSWORD } = process.env;

(async () => {
    try {
        const connection = await mysql.createConnection({ host: DB_HOST, user: DB_USER, password: DB_PASSWORD });
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
        connection.end();
        console.log("Veritabanı tablosu oluşturuldu!");
    } catch (error) {
        console.error(`Veritabanı tablosu oluşturulurken hata oluştu: ${error}`);
    }
})();