const btnSalvarLocalmente = document.getElementById('salvarLocalmente')
btnSalvarLocalmente.addEventListener('click', salvarTextoLocalmente)

function salvarTextoLocalmente() {
    const variavelSalva = document.getElementById('inputTexto').value

    localStorage.setItem('textoSalvo', variavelSalva)

    alert(`Texto "${variavelSalva}" salvo localmente com sucesso!`)

    document.getElementById('inputTexto').value = '';
}