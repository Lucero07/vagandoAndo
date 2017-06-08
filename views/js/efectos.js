/*function mostrar1(){
    document.getElementsByClassName("letrero")[0].style.display = none;
    document.getElementsByClassName("foto")[0].style.display = none;
};*/
// jQuery
$(document).ready(function(){ 
   $("#letrero1").click(function(){
      $("#foto1").toggle("slow");
   });
    $("#letrero2").click(function(){
      $("#foto2").toggle("slow");
   });
    $("#letrero3").click(function(){
      $("#foto3").toggle("slow");
   });
    $("#letrero4").click(function(){
      $("#foto4").toggle("slow");
   });
    $("#letrero5").click(function(){
      $("#foto5").toggle("slow");
   });
    $("#letrero6").click(function(){
      $("#foto6").toggle("slow");
   });
});



