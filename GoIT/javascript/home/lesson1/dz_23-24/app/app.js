requirejs.config({
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery'
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        }
    }
});

require(
    [
        'tmpl',
        'model',
        'view',
        'controller',
        'jquery'
    ],
    function ( tmpl, Model, View, Controller, $) {
        $(function () {
            var firstToDoList = ['Learn HTML', 'Learn CSS', 'Learn JS'];
            var model = new Model(firstToDoList);
            var view = new View(model);
            var controller = new Controller(model, view);
        });
    }
);