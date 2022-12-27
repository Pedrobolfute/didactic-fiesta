media = function(){
    let guardarNome = prompt("Nome do aluno:");
    let nota1 = parseInt(prompt("Nota 1: "));
    let nota2 = parseInt(prompt("Nota 1: "));

    let calcular = (nota1 + nota2) / 2;
    toString(calcular);

    document.getElementById("campo").innerHTML = (`
    <p>Nome: ${guardarNome}</p>
    <p>Nota1: ${nota1}</p>
    <p>Nota2: ${nota2}</p>
    <p>Media: ${calcular}</p>
    `)
}