var nome = prompt("Qual é o seu nome");
alert(nome + "\n" + " Bem Vindo Ao Encriptador de Textos!!!");

const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
document.getElementById("botao").style.display = 'none';

// Encriptar mensagem

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"
    aparece()
    alert("Parabéns!!! " + "\n" + nome + " Você encriptou a mensagem com sucesso.")
}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada;
}


// Desencriptar mensagem

function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"  
    aparece()
    alert("Perfeito!!! " + "\n" + nome  + " Texto descriptografado com sucesso.")
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}


// Botão Copiar Texto

function copiar() {
    const msg = document.querySelector(".mensagem");
    msg.select();
    navigator.clipboard.writeText(msg.value)
    msg.value = "";
    alert("Texto Copiado!!!")
}

function aparece() {
    document.getElementById("botao").style.display = 'block';
}

// Botão Limpar

function limpar() {
    document.querySelector('.input-texto').value='';
    document.querySelector('.mensagem').value='';
    alert("Campos Prontos Para Nova Criptografia!!!")
}

