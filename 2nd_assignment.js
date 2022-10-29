// alert("He")
$(document).ready(function(){

    $("body").css("overflow-x","hidden");
    
    $("div.box").width("100%");
    $(".box").css("margin","0");
    $(".box").css("padding","0");
    $(".box").css("text-align","center");


    $(".box1").height("50px");
    $(".box1").width("100%");
    $(".box1").css("background-color","rgb(189,247,197)");
    $(".box1 h2").css("margin","0");
    $(".box1 h2").css("padding","0");



    $(".box2").width("100%");
    $(".box2").height("200px");
    $(".box2").css("background-color","rgb(28,139,190)");
    $(".box2 h1").css("margin","0");
    $(".box2 h1").css("padding","0");

   
    $(".box2").hide();

    $(".box1").click(function(){
        $(this).css("cursor","pointer");
        $(".box2").slideDown();
    });


})