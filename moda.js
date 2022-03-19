const lista1 =[
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    2,
    6,
    2,
    3,
];

const lista1_count = {

};

lista1.map(
    function(elemento){
        if(lista1_count[elemento]){
            lista1_count[elemento] += 1;

        }
        else{
            lista1_count[elemento]= 1;
        }
    }
);

lista1_array = Object.entries(lista1_count).sort(
    function(valor_acum,nuevo_valor){
        return elementoA[1] - elementoB[1];

    }
);
const moda = lista1Array[lista1Array.length - 1];