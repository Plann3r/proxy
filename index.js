var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();


// proxy middleware options
var optionsThalento = {
        target: 'https://one.thalentodev.be/vl/rest/planner', // target host
        changeOrigin: true,               // needed for virtual hosted sites
        ws: true,                         // proxy websockets
        pathRewrite: {
            '^/thalento' : '/'           // remove base path
        }
    };

// create the proxy (without context)
var proxyThalento = proxy(optionsThalento);


// proxy middleware options
var optionsTest = {
        target: 'https://young-retreat-32139.herokuapp.com/signon', // target host
        changeOrigin: true,               // needed for virtual hosted sites
        ws: true,                         // proxy websockets
        pathRewrite: {
            '^/test' : '/'           // remove base path
        }
    };

// create the proxy (without context)
var proxyTest= proxy(optionsTest);

// mount `exampleProxy` in web server
var app = express();
    app.use('/thalento', proxyThalento);
    app.use('/test',proxyTest);
    app.listen(80);
