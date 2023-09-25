const btnSalvarLocalmente = document.getElementById('salvarLocalmente')
btnSalvarLocalmente.addEventListener('click', salvarTextoLocalmente)

atualizarContadorVisitas()

var temaEscolhido = localStorage.getItem("temaEscolhido");
if (temaEscolhido) {
    aplicarTema(temaEscolhido)
    document.getElementById("temaToggle").checked = (temaEscolhido === 'dark')
}

document.getElementById("temaToggle").addEventListener("change", function() {
    if (this.checked) {
        aplicarTema('dark')
        localStorage.setItem("temaEscolhido", 'dark')
    } else {
        aplicarTema('light'); 
        localStorage.setItem("temaEscolhido", 'light')
    }
});

function aplicarTema(preferencia) {
    if (preferencia === 'dark') {
        document.body.classList.add('dark-theme')
    } else {
        document.body.classList.remove('dark-theme')
    }
}

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