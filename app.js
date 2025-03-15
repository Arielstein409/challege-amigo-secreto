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

}
