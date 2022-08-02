var botonDesencriptar = document.querySelector(".botonDesencriptar");

botonDesencriptar.addEventListener("click", function(event){
    event.preventDefault();

    var txtinput = document.querySelector(".zonaTexto");
    var texto = txtinput.value;
    
   
    var text =[]
    
    for (let i = 0; i < texto.length; i++) {
        text.push(texto [i]);
               
    }
   

    for (let i = 0; i < text.length; i++) {
       
    }
    
    var text2 = text.join("");


    for (let i = 0; i < text2.length; i++) {
        text2 = text2.replace("ai", "a");
    }
         for (let i = 0; i < text2.length; i++) {
            text2 = text2.replace("enter", "e");
        }
            for (let i = 0; i < text2.length; i++) {
                text2 = text2.replace("imes", "i");
            }
                for (let i = 0; i < text2.length; i++) {
                    text2 = text2.replace("ober", "o");
                }
                    for (let i = 0; i < text2.length; i++) {
                        text2 = text2.replace("ufat", "u");
                    }
     
document.querySelector(".mensajebox1").value = text2;


    
});
