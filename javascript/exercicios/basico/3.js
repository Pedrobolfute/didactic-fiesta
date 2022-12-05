function entrar(){
    let guardarNome = prompt("Seu nome?");
    let section = document.getElementById("saida");


    section.innerHTML = (`<div><p><br> Fala ${guardarNome}, blz?</p></div>`);

}