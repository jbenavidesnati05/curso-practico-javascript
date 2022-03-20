//Scope GLOBAL ==> Podemos acceder desde cualqueir parte del codigo


/*Scope LOCAL==> Vaviables creadas dentro de una funcion y que solo 
pueden ser accedidas por su misma funcion o desde una funcion anidada.*/

var global = " esta es global";
//alert(global);

var mifuncion = function(){
document.write(global);
var local = "esta es local";
}

var global = " global modificada";



mifuncion()
