const Restaurant = require('../models/restaurants');
const User = require('../models/user');

exports.getIndex = (req, res, next) => {
    console.log(req.cookies.userdata);

    const restaurants = Restaurant.getAll();
    res.render('users/index', {
        restaurants: restaurants,
        path: '/',
        title: 'Kolaylokma - Ne yesek diye düşünme derdine son!'
        
    });
}

exports.getAbout = (req, res, next) => {
    res.render('users/about', {
        path: '/',
        title: 'Kolaylokma - Hakkımızda'
    });
}

exports.getLogin = (req, res, next) => {
    res.render('account/login', {
        path: '/login',
        title: 'Kolaylokma - Giriş Yap'
    });
}

exports.getRegister = (req, res, next) => {
    res.render('account/register', {
        path: '/register',
        title: 'Kolaylokma - Kayıt Ol'
    });
}


exports.postLogin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Veritabanından kullanıcıyı bul
        const user = await User.findOne({ where: { email: email } });

        // Kullanıcı bulunamazsa veya şifre eşleşmezse, hata göster ve giriş sayfasını tekrar yükle
        if (!user || user.password !== password) {
            res.render('/login', { error: 'Geçersiz e-posta veya şifre' });
            return;
        }

        // Kullanıcı başarıyla giriş yapmışsa, oturum bilgisini sakla ve ana sayfaya yönlendir
        req.session.user = user;
        res.redirect('/');
    } catch (error) {
        // Veritabanı hatası olursa, hata göster ve login sayfasını tekrar yükle
        console.error('Giriş sırasında bir hata oluştu:', error);
        res.render('/login', { error: 'Bir hata oluştu. Lütfen tekrar deneyin.' });
    }
};

exports.postRegister = async (req, res, next) => {
        const { email, password } = req.body;
    
        try {
            // Veritabanına yeni kullanıcıyı kaydet
            console.log(User);
            const newUser = await User.create({ email, password });
            console.log('Yeni kullanıcı oluşturuldu:', newUser);
    
            // Kullanıcı başarıyla kaydedildiğinde ana sayfaya yönlendir
            res.redirect('/login');
        } catch (error) {
            // Hata durumunda kullanıcıya hata mesajı göster
            console.error('Kayıt sırasında bir hata oluştu:', error);
            res.redirect('/register'); // veya başka bir hata işleme yönlendirebilirsiniz
        }
}

exports.getReset= (req, res, next) => {
    res.render('account/reset', {
        path: '/reset',
        title: 'Reset'
    });
}

exports.postReset = (req, res, next) => {
    res.redirect('/login');
}

exports.getLogout = (req, res, next) =>{
    res.clearCookie('userdata');
    res.redirect('/');
}
