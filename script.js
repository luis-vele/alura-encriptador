var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var resultado = document.querySelector(".texto-resultado");

function encriptar(){
    
    var cajatextoE = document.querySelector(".cajatexto")
    resultado.textContent = encriptarTexto(cajatextoE.value);
    document.getElementById("textos-informativos").style.display = "none";
}

function desencriptar(){
   
    var cajatextoD = document.querySelector(".cajatexto")
    resultado.textContent = desencriptarTexto(cajatextoD.value);
    document.getElementById("textos-informativos").style.display = "none";
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const botonCopiarJ = document.querySelector(".botonCopiar"); 
botonCopiarJ.addEventListener("click", copiar = () => {
var contenido = document.querySelector(".texto-resultado").textContent;
navigator.clipboard.writeText(contenido);
});