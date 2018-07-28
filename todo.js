//check off todos
//originally $("li").click(function()
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
//    if($(this).css("color") === "rgb(128, 128, 128)"){
//        $(this).css({
//            color:"black",
//            textDecoration:"none"
//        });
//    }else{
//        $(this).css({
//            color:"gray",
//            textDecoration:"line-through"
//        });
//    }
});

//click on X to delete todo
//originally $("span").click(function(event)
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(1000,function(){
        $(this).remove();
    })
    event.stopPropagation();
})

//adding new Todo
$('input[type="text"]').keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
})

$(".fa-plus").click(function(){
    $('input[type="text"]').fadeToggle();
})