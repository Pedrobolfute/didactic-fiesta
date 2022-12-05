function calcular(){
    let guardarConta = prompt("Numero: ");
    let dobro = guardarConta * 2;
    let metade = guardarConta / 2;

    let campo = document.getElementById("campo");

    campo.innerHTML = (`
    <br><p>${guardarConta} * 2 = ${dobro}</p>
    <br><p>${guardarConta} / 2 = ${metade}</p>`);
    
}