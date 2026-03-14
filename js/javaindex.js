$("#btn_ordenar").click(function () {

    var x = parseFloat($("#txtX").val());
    var y = parseFloat($("#txtY").val());
    var z = parseFloat($("#txtZ").val());

    var menor, medio, maior;

    // --- Encontrar o menor ---
    if (x <= y && x <= z) {
        menor = x;
    } else if (y <= x && y <= z) {
        menor = y;
    } else {
        menor = z;
    }

    // --- Encontrar o maior ---
    if (x >= y && x >= z) {
        maior = x;
    } else if (y >= x && y >= z) {
        maior = y;
    } else {
        maior = z;
    }

    // --- Encontrar o médio ---
    if ((x >= y && x <= z) || (x <= y && x >= z)) {
    medio = x;
    } else if ((y >= x && y <= z) || (y <= x && y >= z)) {
    medio = y;
    } else {
    medio = z;
    }


    $("#txtresultado")
        .html("Ordem Crescente: " + menor + " , " + medio + " , " + maior)
        .css({ "font-weight": "bold", "font-size": "20px", "color": "#00005c" });

});
