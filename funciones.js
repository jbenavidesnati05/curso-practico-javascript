function saludo (nombre, apellido){
    document.write(`un saludo  ${nombre} ${apellido}`); 
}
saludo("arturo", "benavides");
document.write("<br>"); 

saludo("Jorge", "nati");
document.write("<br>"); 


function sumar(n1,n2){
    resultado = n1+n2
    document.write(`el resultado de la suma es ${resultado}`); 

}
sumar(2,5)
document.write("<br>"); 


function operaciones(oper,n1,n2){

    if(oper == "+"){
        resultado = n1+n2;
        document.write(`el resultado de la suma es ${resultado}`); 

    }else if(oper== "-"){
        resultado = n1-n2;
        document.write(`el resultado de la resta es ${resultado}`); 

    }else if (oper== "*"){
    resultado = n1*n2;
    document.write(`el resultado de la multiplicacion es ${resultado}`); 
    }else{
        resultado = n1/n2;
        document.write(`el resultado de la division  es ${resultado}`); 

    }
}

operaciones("+",2,4);
document.write("<br>"); 

operaciones("-",2,4);
document.write("<br>"); 

operaciones("*",2,4);
document.write("<br>"); 

operaciones("/",2,4);
document.write("<br>"); 

var costo = function (precio,ganacia){
    costo_producto= precio*ganacia
    return precio*ganacia
}

document.write("el valor del producto es $" +costo(99000,1.2)+ " pesos colombianos");

document.write("<br>"); 

//funcion que calcule el numero mas grande de dos valores 

function numero_grande(n1,n2){
    if(n1>n2){
        document.write(`el numero ${n1} es mayor que ${n2}`)
    }else{
        document.write(`el numero ${n2} es mayor que ${n1}`)
    }
}
numero_grande(5,6)
document.write("<br>"); 
numero_grande(100,56)