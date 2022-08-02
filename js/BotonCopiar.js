var BotonCopiar = document.querySelector(".botonCopiar");
BotonCopiar.addEventListener("click", function (event){
    event.preventDefault();
    var content = document.querySelector(".mensajebox1");

    content.select();
    document.execCommand("copy");
    alert("copiado!");

});