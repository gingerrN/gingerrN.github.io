requirejs.config({
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery'
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        }
    }
});

require(
    [   'jquery',
        'tmpl',
        'model',
        'view',
        'controller'
        
    ],
    function ( jquery, tmpl, Model, View, Controller) {
        
        $(function () {
            var firstToDoList = ['Learn HTML', 'Learn CSS', 'Learn JS'];
            var model = new Model(firstToDoList);
            var view = new View(model);
            var controller = new Controller(model, view);
        });
    }
);