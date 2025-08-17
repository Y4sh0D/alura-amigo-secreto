// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayDeAmigosBase = [];

function agregarNombre(nombre){
    nombre = document.getElementById("amigo");
    if (nombre.value === "") {
        alert("¡El nombre no puede estar vacío!");
        return;
    }
    nombre = nombre.value.trim();
    arrayDeAmigosBase.push(nombre);
    alert("¡El nombre ha sido agregado correctamente!");
    
    document.getElementById("amigo").value = "";
    console.log(arrayDeAmigosBase);
}

function actualizarMuestroDeArray(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < arrayDeAmigosBase.length; i++) {
        let amigo = document.createElement("li");
        amigo.textContent = arrayDeAmigosBase[i];
        listaAmigos.appendChild(amigo);
    }
}
