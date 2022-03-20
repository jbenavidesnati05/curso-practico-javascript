var amigos= ["carlos", "juan", "andres","lucho"];


document.write(amigos[0]);

// cambiar el valor de un arreglo 

amigos[0]="arturito";
amigos[2]="nacho";

document.write("<br>")

document.write(amigos[0]);


//agregar amigos
amigos[4]= " fabiola"
amigos[5]= " oscar"
amigos[amigos.length] = "byron"
amigos.push("puto","putito","putin")
//eliminar el ultimo del arreglo

amigos.pop();


document.write("<br>")
document.write("el array amigos tiene " +amigos.length+ " en su lista");
document.write("<br>");

var amigos2= ["jauco", "jose", "anto","andy"];
var amigos3= ["nacho", "yeo", "sari","ruki"];

var amigos3 = amigos.concat(amigos2);

document.write(amigos3);

// usos de join 

document.write(amigos.join(" ----Ingeniero "));

// ordenar 

var ordenados= amigos.reverse();
document.write(ordenados);


 