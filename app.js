// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];



function asignarElemento(elementos, texto) {
    let elementoHTML = document.querySelector(elementos)
    elementoHTML.innerHTML = texto;
    return;
}

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

    //Regresar el elemento h2 a su estado original
    asignarElemento('h2', 'Digite el nombre se sus amigos')

    recorrerLista();
}

function recorrerLista() {
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




function sortearAmigo() {
    //Validar que no haya amigos disponibles
    if (nombres.length === 0) {
        asignarElemento('h2', 'No hay amigos para sortear. Por favor, agregue al menos un nombre.');
    } else {

        //Generar un índice aleatorio
        let indiceAleatorio = Math.floor(Math.random() * nombres.length);

        //Obtener el nombre sorteado
        let amigoSorteado = nombres[indiceAleatorio];

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;
    }
}

