exports.function = (req, res, next) => {
    const render = res.render;
    res.render = function (view, options, fn) {
        const data = Object.assign({}, options, { layout: undefined, title: undefined });
        data.userdata = req.cookies.userdata;
        options = {
            _data: data,
            layout: options.layout || 'layouts/main-layout',
            title: options.title || 'Kolaylokma'
        };
        render.call(this, view, options, fn);
    };

    next();
};