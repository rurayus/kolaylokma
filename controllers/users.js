const Restaurant = require('../models/restaurants');
const MenuItems = require('../models/menuItem');
const User = require('../models/user');
const Sequelize = require('sequelize');

const SABIT = require('../constants');

exports.getIndex = async (req, res, next) => {
    console.log(req.cookies.userdata);

    const restaurants = await Restaurant.findAll({ raw: true });
    const menuItems = await MenuItems.findAll({ raw: true });

    console.log(restaurants)
    console.log(menuItems)
    res.render('users/index', {
        restaurants: restaurants,
        menuItems: menuItems,
        mahalleler: SABIT.MAHALLELER,
        kategoriler: SABIT.KATEGORILER,
        path: '/',
        title: 'Kolaylokma - Ne yesek diye düşünme derdine son!'
    });
}

exports.getMenus = async (req, res, next) => {
    const mahalleler = req.query.mahalleler?.trim() ? req.query.mahalleler.split(', ') : [];
    const minFiyat = req.query.minFiyat;
    const maxFiyat = req.query.maxFiyat;
    const kategoriler = req.query.kategoriler?.trim() ? req.query.kategoriler.split(', ') : [];
    const puan = req.query.puan;
    const sirala = req.query.sirala;
    const restaurantNames = req.query.restaurantNames?.trim() ? req.query.restaurantNames.split(', ') : [];

    console.log("Mahalleler: ", mahalleler);
    console.log("Puan: ", puan);
    console.log("Kategoriler: ", kategoriler);
    console.log("Min Fiyat: ", minFiyat);
    console.log("Max Fiyat: ", maxFiyat);
    console.log("Sırala: ", sirala);

    const restaurantWhereClause = {};
    if (mahalleler.length > 0) {
        restaurantWhereClause.mahalle = mahalleler;
    }

    if (restaurantNames.length > 0) {
        restaurantWhereClause.name = restaurantNames;
    }

    if (puan) {
        restaurantWhereClause.puan = {
            [Sequelize.Op.gte]: puan,
            [Sequelize.Op.lt]: puan + 1
        }
    }

    const restaurants = await Restaurant.findAll({
        where: restaurantWhereClause,
        // order: [['puan', 'DESC']], // yuksekten dusuk puana gore siralamak isterseniz bu satiri acabilirsiniz
        raw: true
    });

    const menuWhereClause = {};

    menuWhereClause.restaurantId = {
        [Sequelize.Op.in]: restaurants.map(restaurant => restaurant.id)
    };

    if (kategoriler.length > 0) {
        menuWhereClause.kategori = kategoriler;
    }

    if (minFiyat || maxFiyat) {
        const priceClause = {};
        if (minFiyat) {
            priceClause[Sequelize.Op.gte] = minFiyat;
        }
        if (maxFiyat) {
            priceClause[Sequelize.Op.lte] = maxFiyat;
        }
        menuWhereClause.price = priceClause;
    }

    const menuItems = await MenuItems.findAll({
        where: menuWhereClause,
        order: [['price', sirala === 'yuksekfiyat' ? 'DESC' : 'ASC']],
        raw: true
    });

    // add menus to restaurants
    const restaurantsWithMenus = restaurants.map(restaurant => {
        restaurant.menu = menuItems.filter(menuItem => menuItem.restaurantId === restaurant.id);
        return restaurant;
    });


    res.render('users/menus', {
        restaurantsWithMenus: restaurantsWithMenus.filter(restaurant => restaurant.menu.length > 0),
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
            console.log("test");

            return res.status(401).json({ error: 'Geçersiz email veya şifre...' });
        }

        // Kullanıcı başarıyla giriş yapmışsa, cookie bilgisini sakla ve ana sayfaya yönlendir
        res.cookie('userdata', user.email);
        res.status(200).json({ data: "success" });

        //res.redirect('/');
    } catch (error) {
        // Veritabanı hatası olursa, hata göster ve login sayfasını tekrar yükle
        console.error('Giriş sırasında bir hata oluştu:', error);
        res.status(500).json({ error: 'Bir hata oluştu. Lütfen tekrar deneyin.' });
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

exports.getReset = (req, res, next) => {
    res.render('account/reset', {
        path: '/reset',
        title: 'Reset'
    });
}

exports.postReset = (req, res, next) => {
    res.redirect('/login');
}

exports.getLogout = (req, res, next) => {
    res.clearCookie('userdata');
    res.redirect('/');
}