let nombres = [];

// Función para actualizar el contenido de un elemento HTML
function asignarElemento(elementos, texto) {
    let elementoHTML = document.querySelector(elementos);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
    return;
}

// Función para agregar un amigo
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;

    if (amigo.trim() === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Verificar si el amigo ya fue agregado
    if (nombres.includes(amigo)) {
        alert('Este nombre ya ha sido agregado.');
        return;
    }

    // Agregar el nombre a la lista
    nombres.push(amigo);
    console.log(nombres);

    // Vaciar para ingresar nuevo nombre
    document.getElementById("amigo").value = '';

    // Regresar el elemento h2 a su estado original
    asignarElemento('h2', 'Digite el nombre de sus amigos');

    // Actualizar la lista de amigos en el DOM
    recorrerLista();
}

// Función para recorrer la lista de amigos y actualizar la interfaz
function recorrerLista() {
    let listaAmigos = document.getElementById("listaAmigos");

    // Limpiar la lista HTML antes de agregar los nuevos elementos
    listaAmigos.innerHTML = '';

    for (let i = 0; i < nombres.length; i++) {
        let li = document.createElement("li");
        li.textContent = nombres[i];
        listaAmigos.appendChild(li);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (nombres.length === 0) {
        asignarElemento('h2', 'No hay amigos para sortear. Por favor, agregue al menos un nombre.');
    } else {
        let indiceAleatorio = Math.floor(Math.random() * nombres.length);
        let amigoSorteado = nombres[indiceAleatorio];

        // Mostrar el resultado del sorteo
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;


    }
}
