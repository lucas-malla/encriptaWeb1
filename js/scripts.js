let titleMessage = document.getElementById('title-msj');
let parrafp = document.getElementById('parrafp-msj')
let image = document.getElementById('img-encrypted')


function encrypt() {
let text = document.getElementById('text-enter').value;


  let encryptedText = text
    .replace(/e/gi,"enter")
    .replace(/i/gi,"imes")
    .replace(/a/gi,"ai")
    .replace(/o/gi,"ober")
    .replace(/u/gi,"ufat");

  if (text.length != 0) {
    document.getElementById("text-enter").value = encryptedText;
    titleMessage.textContent = "Texto encriptado con éxito";
    parrafp.textContent = "";
    image.src = "./img/decrypted.jpeg";
  } else {
    image.src = "./img/UpProblems.jpg";
    titleMessage.textContent = "Ningún mensaje fue encontrado";
    parrafp.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
  }
} 

function decrypted() {
  let text = document.getElementById('text-enter').value;

  let textDecrypted = text
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
    if (text.length != 0) {
      document.getElementById("text-enter").value = textDecrypted;
      titleMessage.textContent = "Texto desencriptado con éxito";
      parrafp.textContent = "";
      image.src = "./img/textdecrypted.jpg";
    } else {
      image.src = "./img/UpProblems.jpg";
      titleMessage.textContent = " Up ningún mensaje fue encontrado";
      parrafp.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    }
}
