$.getJSON("/articles",function(data){
    for(var i = 0; i < 20; i++){
        $("#articles").prepend("<p data_id'" + data[i]._id + "'>"
         + data[i].title + "<br/>"+ "<a>"+data[i].link+"</a>" + "</p>");
    }
});

$(document).on("click", "p", function(){
    $("#notes").empty();
    var thisId = $(this).attr("data-id");

    $.ajax({
        method: "GET",
        url: "/articles/"+thisId
    }).then(function(data){
        console.log(data);
        $("#notes").append("<h2>"+ data.title + "</h2>");
        $("#notes").append("<input id='titleinput' name='title' >");
        $("#notes").append("<textarea id ='body-input' name='body'></textarea>");
        $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

        if (data.note){
            $("#titleinput").val(data.note.title);
            $("#bodyinput").val(data.note.body);
        }
    });
});

$(document).on("click","#savenote", function(){
    var thisId=$(this).attr("data-id");

    $.ajax({
        method: "POST",
        url:"/articles/" + thisId,
        data: {
            title: $("#titleinput").val(),
            body:$("#bodyoinput").val()
        }
    }).then(function(data){
        console.log(data);
        $("#notes").empty();
    });
    $("#titleinput").val('');
    $("#bodyinput").val('');
});