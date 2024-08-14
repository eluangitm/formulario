const form = document.getElementById(form-deposito)

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.legth >= 2;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
})

function validaçaoForm() {
    if (!validaçaoForm)
}