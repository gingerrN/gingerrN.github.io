// callback function
function GoogleCallback (func, data) {
    window[func](data);
}

$(function() {
    $("#target").submit( function(e) {
        e.preventDefault();
        var $myRequest = $(".form__search").val() || 'релевантность';
        
        $.getJSON("http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q="+ $myRequest +"&callback=GoogleCallback&context=?",
        function(data){
            var ul = document.createElement("ul");
            $.each(data.results, function(i, val){
                    var li = document.createElement("li");
                    li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+val.content;                            
                    ul.appendChild(li);
            });
            $('.wrapper__result').html(ul);
            
        });
    });
});

