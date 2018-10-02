$(document).ready(function(){
  
    window.onload = function () {
      typeWriter()
    };
    var i = 0;
    var txt = 'Hello, my name is Owen Muriithi.';
    var speed = 200; 
    
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("type").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    $(".logo").fadeIn(10000);   
    $("#me").click(function(){
        $("#title").hide();
        $("#about").show();
        $("#skills").hide();
        $("#projects").hide();
        $("#contact").hide();
    })
    $("#skill").click(function(){
        $("#title").hide();
        $("#skills").show();
        $("#projects").hide();
        $("#contact").hide();
        $("#about").hide();
    })
    $("#pro").click(function(){
        $("#title").hide();
        $("#project").show();
        $("#contact").hide();
        $("#about").hide();
        $("#skills").hide();
    })
    $("#simu").click(function(){
        $("#title").hide();
        $("#contact").show();
        $("#about").hide();
        $("#skills").hide();
        $("#project").hide();
    })
    $("#prev1").click(function(){
        $("#title").show();
        $("#about").hide();
    })

    $("#next1").click(function(){
        $("#skills").show();
        $("#about").hide();
    })

    $("#prev2").click(function(){
        $("#about").show();
        $("#skills").hide();
    })

    $("#next2").click(function(){
        $("#project").show();
        $("#skills").hide();
    })
    $("#prev3").click(function(){
        $("#about").show();
        $("#project").hide();
    })

    $("#next3").click(function(){
        $("#contact").show();
        $("#project").hide();
    })
    $("#prev4").click(function(){
        $("#project").show();
        $("#contact").hide();
    })
   
});