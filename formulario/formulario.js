const form = document.getElementById('form-numero');

const campoA = document.getElementById('Campo A');
const campoB = document.getElementById('Campo B');

function validarValor() {
    const campoA = Number(campoA.value);
    const campoB = Number(campoB.value);
        if (campoB > campoA){
            alert("Válido");
        } else {
            alert("Inválido");
        }
}



form.addEventListener('submit', function(e){
    e.preventDefault();
})

console.log(form)