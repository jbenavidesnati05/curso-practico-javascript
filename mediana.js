function cal_media_aritmetica(lista){

    let sumalista=0
    for(let i=0; i<lista.length;i++){
    sumalista= sumalista+lista[i];
    }
    const prom_lista =sumalista /lista.length;
    return prom_lista;

}



const lista1=[
    1,
    2,
    3,
    7,
    5,
    8,
    
];

const mitad_lista1 = parseInt(lista1.length/2);

function es_par(numero){
    if (numero % 2===0){
        return true
        }
     else{
         return false
        }   
}

let mediana;

if(es_par(lista1.length)){

    const ele1 = lista1[mitad_lista1];
    const ele2 = lista1[mitad_lista1-1];

    const prom12 = cal_media_aritmetica([ele1,ele2]);

    mediana = prom12

}
else{

    mediana = lista1[mitad_lista1];

}
