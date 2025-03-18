// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];

function agregarAmigo() {

    // validar la entrada
    let amigo = document.getElementById("amigo").value;
    if (amigo.trim() === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    //Agregar el nombre a la lista
    nombres.push(amigo);
    console.log(nombres);

    //Vaciar para ingresar nuevo nombre
    document.getElementById("amigo").value = '';


    recorrerLista();
}

function recorrerLista(nombre) {
    //obtener la referencia de la lista en el DOM
    let listaAmigos = document.getElementById("listaAmigos");

    //Limpiar la lista HTML antes de agregar los nuevos elementos
    listaAmigos.innerHTML = '';

    for (let i = 0; i < nombres.length; i++) {
        let li = document.createElement("li");

        //Asignar el nombre al texto del <li>
        li.textContent = nombres[i];

        //agregar el <li> al contenedor de la lista HTML
        listaAmigos.appendChild(li);

    }

}

function seleccionAleatoria() {
    let nombreAleatorio = Math.floor(Math.random(listaAmigos));



}
console.log(seleccionAleatoria());