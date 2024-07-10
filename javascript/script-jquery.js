$(document).ready(function(){
 
    var text = $(".web-title");  
    var dev = $("#development")
    var eUpper =$("#e-word")

    text.animate({fontSize: '50px'}, "slow");
    dev.css("color", "#4ad9cb")
    eUpper.css("color", "white")
});


$(document).ready(function(){
  $(".c-second").hover(function(){
    var text = $("#second-title-2");  


    text.animate({fontSize: '30px'}, 5000);
    text.css("color", "#4ad9cb")
   
  });
});
