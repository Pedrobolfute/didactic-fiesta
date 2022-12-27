function somar(){
    let x = parseInt(prompt("Primeiro valor:"));
    let y = parseInt(prompt("Segundo valor: "));

    let soma = x + y;

    document.getElementById("campo").innerHTML = 
    ("<p>" + x + "+" + y + "=" + soma + "</p>");
}