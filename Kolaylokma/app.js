const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'\\pages\\index.html')
});

app.get('/hakkimizda', function(req, res) {
    res.sendFile(__dirname+'\\pages\\hakkimizda.html');
});

app.get('/login',function(req,res){
    res.sendFile(__dirname+'\\pages\\login.html');
})


app.listen(1453);