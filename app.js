const express = require('express');
const app = express();

app.use(express.static('public')); // Stil ve resim dosyalarına erişim için public klasörünü tanımladık

app.set('view engine', 'ejs'); // View Engine olarak ejs kullanılacağını belirttik
app.set('views', __dirname + '/pages'); // Sayfaların bulunduğu klasör yolunu belirttik

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/hakkimizda', function (req, res) {
    res.render('about');
});

app.get('/login', function (req, res) {
    res.render('account/login');
})

app.listen(1453,()=>{
    console.log('Listening on port 1453');
});