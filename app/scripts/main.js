require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        bootstrap: 'vendor/bootstrap',
        handlebars: '../components/handlebars/handlebars'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'bootstrap','handlebars'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);

		//compile the template
    var source = document.getElementById("photo-template").textContent;
    var myTemplate = Handlebars.compile(source);
    var contentHTML = myTemplate({ didascalia : 'prova didascalia' });
		document.getElementById("photo-background").innerHTML = contentHTML;
});