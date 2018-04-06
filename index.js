var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();


// proxy middleware options
var optionsThalento = {
        target: 'https://young-retreat-32139.herokuapp.com/signon', // target host
        changeOrigin: true,               // needed for virtual hosted sites
        ws: true,                         // proxy websockets
        pathRewrite: {
            '^/thalento' : '/'           // remove base path
        }
    };

// create the proxy (without context)
var proxyThalento = proxy(optionsThalento);

// mount `exampleProxy` in web server
var app = express();
    app.use('/thalento', proxyThalento);
    app.listen(80);
