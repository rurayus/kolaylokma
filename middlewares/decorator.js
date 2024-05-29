const User = require('../models/user');

exports.function = async (req, res, next) => {
    const userRecord = req.cookies.userdata ? await User.findOne({ where: { email: req.cookies.userdata }, raw: true }) : null;
    req.userRecord = userRecord;

    const render = res.render;
    res.render = function (view, options, fn) {
        const data = Object.assign({}, options, { layout: undefined, title: undefined });
        data.userdata = req.cookies.userdata;
        options = {
            _data: data,
            layout: options.layout || 'layouts/main-layout',
            title: options.title || 'Kolaylokma',
            role: userRecord?.role || 'guest'
        };
        render.call(this, view, options, fn);
    };

    next();
};