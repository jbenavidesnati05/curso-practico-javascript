//const precio_original = 100;
//const porcentaje_descuento = 15;

//const precio_con_descuento = precio_original*(1-porcentaje_descuento/100)
//console.log(`El precio con descuento es:  ${precio_con_descuento}`)

function calcular_precio_descuento(precio,porcentaje_descuento){

    const precio_con_descuento = precio*(1-porcentaje_descuento/100);
    return precio_con_descuento;
}

//console.log(calcular_precio_descuentto(1000,15))

function onclick_calcular_precio_descuento(){
    const input_price = document.getElementById("input_price");
    const price_value = input_price.value;



    const input_discount = document.getElementById("input_discount");
    const discount_value = input_discount.value;
    
    const precio_con_descuento = calcular_precio_descuento(price_value,discount_value)

    const result_price = document.getElementById("result_price");
    result_price.innerText = "El precio con descuento es "+precio_con_descuento;
}