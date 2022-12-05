var count = 0;

var clicou = function(){
    count++;
    document.querySelector("#resultado").innerHTML = (`<p>${count}</p>`);
}

var zerou = function(){
    count = 0;
    document.querySelector("#resultado").innerHTML = (`<p>${count}</p>`);

}