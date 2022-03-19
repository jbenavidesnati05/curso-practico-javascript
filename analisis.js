const salarios_col = colombia.map(

    function (persona){
        return persona.salary;
    }
);

const salarios_col_sorted = salarios_col.sort(

    function (salary_a,salary_b) {
        return salary_a-salary_b;
    }

);

function es_par(numero){
    if(numero % 2 ===0);

    }

    function cal_media_aritmetica(lista){

        let sumalista=0
        for(let i=0; i<lista.length;i++){
        sumalista= sumalista+lista[i];
        }
        const prom_lista =sumalista /lista.length;
        return prom_lista;
    
    }
    

    function mediana_salarios(lista){
        const mitad = parseInt(lista.length/2);

        if (es_par(lista.length)){

            const persona_mitad1 = lista[mitad-1];
            const persona_mitad2 = lista[mitad];

            const mediana = cal_media_aritmetica([persona_mitad1,persona_mitad2]);
            return mediana;

       }
        else{
            const persona_mitad = lista[mitad];
        }

    }

    console.log(mediana_salarios(salarios_col_sorted));