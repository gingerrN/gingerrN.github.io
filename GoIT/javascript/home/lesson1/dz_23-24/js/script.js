function Model(data){
    var self = this;

    self.data = data;

    self.addItem = function (item) {
        if(item.length === 0) {
            return;
        }

        self.data.push(item);
        return self.data;
    };


    self.removeItem = function (item) {
        var index = self.data.indexOf(item);

        if (index === -1) {
            return;
        }

        self.data.splice(index, 1);
        return self.data;
    };
}


function View(model){
    var self = this;

    function init() {
        var wrapper = tmpl($('#wrapper__template').html());

        $('body').append(wrapper);
        self.elements = {
            input: $('.item__value'),
            addBtn: $('.item__add'),
            listContainer: $('.item__list')
        };
        self.renderList(model.data);
    }

    self.renderList = function (data) {

        var list = tmpl($('#list__template').html(), {data: data});
    
        self.elements.listContainer.html(list);
    };

    init();
}
//взаимодействие с пользователем, пользователь что-то сделал нужно обновить
function Controller(model, view) {
    var self = this;
    view.elements.addBtn.on('click', addItem);
    
    function addItem() {
        var newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
    }

}


$(function () {
    var firstToDoList = ['lean js', 'lean html', 'lean css'];
    var model = new Model(firstToDoList);
    var view = new View(model);
    var controller = new Controller(model, view);

});