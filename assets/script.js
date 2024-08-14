const original = document.querySelector(".main-section1-area");
const encriptado = document.querySelector(".main-section2-area");


// PROCESO DE ENCRIPTAR

function encriptar(mensaje){
   
let claves = [["e", "enter"], ["i" ,"imes"],["a","ai"],["o", "ober"],["u", "ufat"]];
mensaje = mensaje.toLowerCase();

for (let i=0; i<claves.length;i++){

    if(mensaje.includes(claves[i][0])){
        mensaje= mensaje.replaceAll(claves[i][0],claves[i][1]);
    }
}

return mensaje;

}


function botonEncriptar(){
    const textoEncriptado = encriptar(original.value);
    encriptado.value = textoEncriptado;
    original.value="";
    encriptado.style.backgroundImage = "none"
   

}

// PROCESO DE DESENCRIPTAR

function desencriptar(mensaje){
   
    let claves = [["e", "enter"], ["i" ,"imes"],["a","ai"],["o", "ober"],["u", "ufat"]];
    mensaje = mensaje.toLowerCase();
    
    for (let i=0; i<claves.length;i++){
    
        if(mensaje.includes(claves[i][1])){
            mensaje= mensaje.replaceAll(claves[i][1],claves[i][0]);
        }
    }
    
    return mensaje;
    
    }


    function botonDesencriptar(){

       
        const textoEncriptado = desencriptar(original.value);
        encriptado.value = textoEncriptado;
        original.value="";
        encriptado.style.backgroundImage = "none"
       
    
    }


//PROCESO DE COPIAR EN PORTAPAPELES

function copiarPortapales(mensaje) {
    navigator.clipboard.writeText(mensaje).then(function() {
       alert('El mensaje ha sido copiado en el portapapeles');
    }).catch(function(err) {
        console.error('Error al copiar texto: ', err);
    });

    original.value="";
   
}

function botonCopiar(){

    copiarPortapales(encriptado.value);
}