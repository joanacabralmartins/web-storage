const btnSalvarLocalmente = document.getElementById('salvarLocalmente')
btnSalvarLocalmente.addEventListener('click', salvarTextoLocalmente)

atualizarContadorVisitas();

function salvarTextoLocalmente() {
    const variavelSalva = document.getElementById('inputTexto').value

    localStorage.setItem('textoSalvo', variavelSalva)

    alert(`Texto "${variavelSalva}" salvo localmente com sucesso!`)

    document.getElementById('inputTexto').value = '';
}

function atualizarContadorVisitas() {
    if (localStorage.getItem("contadorVisitas") === null) {
        localStorage.setItem("contadorVisitas", 0)
    }

    var contador = parseInt(localStorage.getItem("contadorVisitas")) + 1
    localStorage.setItem("contadorVisitas", contador)

    document.getElementById("visitas").textContent = "Esta página já foi visitada " + contador + " vezes."
}