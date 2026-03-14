$("#btn_ordenar").click(function(){
    var x = parseFloat($("#txtX").val());
    var y = parseFloat($("#txtY").val());
    var z = parseFloat($("#txtZ").val());
    var maior;
    var medio;
    var menor;

    if (x < y && x < z){
        menor = x
    }else if (y < x && y < z){
        menor = y
    }else if(z < x && z < y){
        menor = z
    }

    //------------------

    if (x > y && x > z){
        maior = x
    }else if (y > x && y > z){
        maior = y
    }else if(z > x && z > y){
        maior = z
    }

    //----------------

    if ((maior == x || menor == x) && (menor == y || maior == y)){
        medio = z
    }else if((maior == z || menor == z) && (menor == y || maior == y)){
        medio = x
    }else if ((maior == z || menor == z) && (menor == x || maior == x)){
        medio = y
    }
    
    maior = parseInt(maior)
    medio = parseInt(medio)
    menor = parseInt(menor)

    $("#txtresultado")
        .html("Ordem Crescente: " + menor + " , " + medio + " , " + maior)
        .css({"font-weight" : "bold", "font-size" : "20px", "color" : "#00005c" });

});
