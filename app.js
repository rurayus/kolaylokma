const express = require('express');
const expressPartials = require('express-partials')
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'ejs'); // View Engine olarak ejs kullanılacağını belirttik
app.set('views', __dirname + '/pages'); // Sayfaların bulunduğu klasör yolunu belirttik

const adminRoutes = require('./routes/admin');
const usersRoutes = require('./routes/users');

const errorController = require('./controllers/error');

const decorator = require('./middlewares/decorator');

app.use(express.static('public')); // Stil ve resim dosyalarına erişim için public klasörünü tanımladık
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(expressPartials());
app.use(decorator.function);

app.use('/admin', adminRoutes);
app.use(usersRoutes);

app.use(errorController.get404Page);

app.listen(1453, () => {
    console.log('Listening on port 1453');
});