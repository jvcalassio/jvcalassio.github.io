$("#copy").click(function(){
    $("#texto-p").select();
    document.execCommand("copy");
});

$("#erase").click(function(){
    $("#texto-p").val("");
});

$("#subst").click(function(){
    var texto = $("#texto-p").val();

    for(var i=1;i<=24;i++){
        var scnd;
        if($("#cont"+i).val() == ""){
            scnd = $("#nome"+i).val();
        } else {
            scnd = $("#cont"+i).val();
        }
        texto = texto.replace( $("#nome" + i).val(), "@" + scnd );
    }

    $("#texto-p").val(texto);
});