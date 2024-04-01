require("dotenv").config();
// .env dosyasini uygulama genelinde kullanmak icin bu satiri ekledik
// bundan sonra "process.env" ile .env dosyasindaki degiskenlere erisebiliriz
// mesela "process.env.DB_HOST" ile .env dosyasindaki "DB_HOST" degerine erisebiliriz
const os = require("os");
const formData = require("express-form-data");
const express = require('express');
const expressPartials = require('express-partials');

//const db = require('./database/index');

const app =express();


const options = {
    uploadDir: os.tmpdir(),
    autoClean: true
  };
  
  app.use(formData.parse(options));
  app.use(formData.format());
  app.use(formData.stream());
  app.use(formData.union());

const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');


app.set('view engine', 'ejs'); // View Engine olarak ejs kullanılacağını belirttik
app.set('views', __dirname + '/pages'); // Sayfaların bulunduğu klasör yolunu belirttik

const adminRoutes = require('./routes/admin');
const usersRoutes = require('./routes/users');

const errorController = require('./controllers/error');

const decorator = require('./middlewares/decorator');



app.use(express.static('public')); // Stil ve resim dosyalarına erişim için public klasörünü tanımladık
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(bodyParser.json());

app.use(expressPartials());
app.use(decorator.function);

app.use('/admin', adminRoutes);
app.use(usersRoutes);

app.use(errorController.get404Page);

app.listen(1453, () => {
    console.log('Listening on port 1453');
});