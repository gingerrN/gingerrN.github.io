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
            editItem: $('.item__edit'),
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
    view.elements.listContainer.on('click', '.item__delete', removeItem);
    view.elements.listContainer.on('click', '.item__edit', editItem);

    function addItem() {
        var newItem = view.elements.input.val();

        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
    }

    function removeItem() {
        var item = $(this).attr('data-value');

        model.removeItem(item);
        view.renderList(model.data);
    }
//ф-ция редактировать 

    function editItem() {
        var item = $(this).attr('data-value');
    
        $('.item__edit').not(this).addClass('other');
        $('.item__delete').not(this).addClass('other');
        //очистить span
        console.log($(this).parent().find('.item__content').html());
        $(this).parent().find('.item__content').html('');
        
        // создать форму:
        $('<input>',{
            type: 'text',
            class: 'item__text',
            value: item,
        }).insertAfter($(this).parent().find('.item__delete'));
         
         // создать кнопку:
         $('<input>',{
            type: 'button',
            value: 'ok',
            class: 'item__button'
        }).insertAfter($(this).parent().find('.item__text'));

         // обрабатывает клик на кнопке ОК
        var textOk = '';
        $('.item__button').on('click',  function () {
            textOk = $('.item__text').val(); // получила новый текст

            //убрать кнопку OK, input
            $('.item__button').hide();
            $('.item__text').hide();

            model.removeItem(item);
            model.addItem(textOk);
            view.renderList(model.data);
         });
    }
}


$(function () {
    var firstToDoList = ['learn js', 'learn html', 'learn css'];
    var model = new Model(firstToDoList);
    var view = new View(model);
    var controller = new Controller(model, view);

});