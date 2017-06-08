var cargarPagina = function(){
  setTimeout(transicionSplash,3000) 
 
};

var transicionSplash = function(){
    location.href = "views/home.html";
};


$(document).ready(cargarPagina);