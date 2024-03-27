const { Sequelize } = require("sequelize");

const { DB_HOST, DB_USER, DB_NAME, DB_PASSWORD } = process.env;

console.log("Aşağıdaki bilgilerle veritabanına bağlanılıyor:");
console.log(`Host\t\t: ${DB_HOST}`);
console.log(`Veritabanı\t: ${DB_NAME}`);
console.log(`Kullanıcı\t: ${DB_USER}`);
console.log(`Şifre\t\t: ${"*".repeat(DB_PASSWORD.length)}`);

const database = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "mysql"
});

async function connect() {
    try {
        await database.authenticate();
        console.log("Veritabanı bağlantısı başarılı!");
    } catch (error) {
        console.error(`Veritabanı bağlantısı başarısız: ${error}`);
    }
}

connect();

database.Sequelize = Sequelize;
module.exports = database;
