var botonEncriptar = document.querySelector(".botonEncriptar");





botonEncriptar.addEventListener("click", function(event){
    event.preventDefault();

    var txtinput = document.querySelector(".zonaTexto");
    var texto = txtinput.value;

    var text =[]
    
    for (let i = 0; i < texto.length; i++) {
        text.push(texto [i]);
               
               }
   
    for (let i = 0; i < text.length; i++) {
        if (text[i] == "a") {
            text[i] = "ai";
             }
            if (text[i] == "e") {
                text[i] = "enter";
                    }
                    if (text[i] == "i") {
                        text[i] = "imes";
                            }
                            if (text[i] == "o") {
                                text[i] = "ober";
                                    }
                                    if (text[i] == "u") {
                                        text[i] = "ufat";
                                            }
    }
    var text2 = text.join("");


    if (text2 === "") {
        
        document.querySelector(".mensajebox").style.display="block"

    } else {
      
        document.querySelector(".mensajebox1").value = text2

        document.querySelector(".imagenbox").style.display ="none";
        document.querySelector(".mensajebox").style.display ="none";
        document.querySelector(".mensajeConsejo").style.display ="none";

        document.querySelector(".mensajebox1").style.display ="block"
        document.querySelector(".botonCopiar").style.display ="block";

    } 


    
  




});

