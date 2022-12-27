calcular = function(){
    let x = parseInt(prompt("Escolha um número: "));

    for (i=1; i<=10; i++){
        let soma = x + i;
        let multiplica = x * i;
        let subtrair = x - i;
        let dividir = x / i;


        document.querySelector("#col1").innerHTML += (`
        <div><p>${x}+${i}= ${soma}</p></div>
        `);
        document.querySelector("#col2").innerHTML += (`
        <div><p>${x}*${i}= ${multiplica}</p></div>
        `);
        document.querySelector("#col3").innerHTML += (`
        <div><p>${x}-${i}= ${subtrair}</p></div>
        `);
        document.querySelector("#col4").innerHTML += (`
        <div><p>${x}/${i}= ${dividir.toFixed(2)}</p></div>
        `);
    }
    
   // if(i == 10){
   //     document.querySelector("#col1").innerHTML += (`<p style="padding-top: 6%;"></p>`);
   //     document.querySelector("#col2").innerHTML += (`<p style="padding-top: 6%;"></p>`);
   //     document.querySelector("#col3").innerHTML += (`<p style="padding-top: 6%;"></p>`);
   //     document.querySelector("#col4").innerHTML += (`<p style="padding-top: 6%;"></p>`);
   //
   // }

}