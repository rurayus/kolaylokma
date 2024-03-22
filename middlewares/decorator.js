exports.function = (req, res, next) => {
    const render = res.render;
    res.render = function (view, options, fn) {
        options = {
            _data: btoa(JSON.stringify(Object.assign({}, options, { layout: undefined, title: undefined }))),
            layout: options.layout || 'layouts/main-layout',
            title: options.title || 'Kolaylokma'
        };
        render.call(this, view, options, fn);
    };

    next();
};