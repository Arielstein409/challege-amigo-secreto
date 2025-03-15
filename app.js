// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];

function agregarAmigo() {

    // validar la entrada
    let amigo = document.getElementById("amigo").value;
    if (amigo.trim() === '') {
        console.log('Por favor, inserte un nombre.');
        return;
    }

    nombres.push(amigo);


}
