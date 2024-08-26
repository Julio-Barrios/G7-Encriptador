// Función para encriptar el texto
function encriptarTexto(texto) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    texto = texto.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return texto;
}
// Función para desencriptar el texto
function desencriptarTexto(texto) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    texto = texto.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return texto;
}
// Función para manejar el botón Encriptar
document.querySelector('.boton__Encriptar').addEventListener('click', function() {
    const inputTexto = document.querySelector('.caja__Texto').value;
    const textoEncriptado = encriptarTexto(inputTexto);
    document.querySelector('.texto__Resultado').textContent = textoEncriptado;

    // Mostrar resultado en la sección de resultado
    document.querySelector('.contenedor__imagen').style.display = 'none';
    document.querySelector('.contenedor__Parrafo').style.display = 'none';
    document.querySelector('.contenedor__Resultado').style.display = 'block';
});

// Función para manejar el botón Desencriptar
document.querySelector('.boton__Desencriptar').addEventListener('click', function() {
    const inputTexto = document.querySelector('.caja__Texto').value;
    const textoDesencriptado = desencriptarTexto(inputTexto);
    document.querySelector('.texto__Resultado').textContent = textoDesencriptado;

    // Reemplazar la imagen y el párrafo
    document.querySelector('.contenedor__imagen').style.display = 'none';
    document.querySelector('.contenedor__Parrafo').style.display = 'none';
    document.querySelector('.contenedor__Resultado').style.display = 'block';
});

// Función para manejar el botón Copiar
document.querySelector('.boton__Copiar').addEventListener('click', function() {
    const resultadoTexto = document.querySelector('.texto__Resultado').textContent;
    navigator.clipboard.writeText(resultadoTexto);

    // Limpiar el resultado y mostrar un mensaje
    document.querySelector('.texto__Resultado').textContent = '';
    document.querySelector('.texto__Resultado').textContent = resultadoTexto.includes('ai') || resultadoTexto.includes('enter') || resultadoTexto.includes('imes') || 
    resultadoTexto.includes('ober') || resultadoTexto.includes('ufat') ? 'Texto Encriptado' : 'Texto Desencriptado';
});
