$(document).ready(function(){
    $("#ab").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(this).css("background-color", "black");
        },
        click: function(){
            $(this).css("background-color", "darkred");
            $(this).css("color","white");

        }
    });
    $("#btn").on({
        click:function(){
            $("#ab").fadeToggle("slow");
            $(this).text("Toggle");
        }
    });
    $("#btn2").click(function(){
        $("#ab").animate({left: '250px'});
    });
});