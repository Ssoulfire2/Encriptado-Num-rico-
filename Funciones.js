function encriptar() {
        var texto = document.getElementById("inputText"). value;
        var textoEncriptado = "";
        for (var i = 0; i < texto.length; i++) {
            var charCode = texto.charCodeAt(i);
            charCode = charCode + 1;
            textoEncriptado += String.fromCharCode(charCode);
        }
        document.getElementById("outputText").innerText = "Texto Encriptado: " + 
textoEncriptado;
    }
    function desencriptar() {
        var textoEncriptado = document.getElementById("inputText").value;
        var textoDesencriptado = "";
        for (var i = 0; i < textoEncriptado.length; i++) {
            var charCode = textoEncriptado.charCodeAt(i);
            charCode = charCode - 1;
            textoDesencriptado += String.fromCharCode(charCode);
        }
        document.getElementById("outputText").innerText = "Texto Desencriptado: " + 
textoDesencriptado;
    }




