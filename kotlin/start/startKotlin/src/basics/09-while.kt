fun main(){
    var listaCompras = arrayOf("Arroz", "feijao", "batata", "uva", "banana", "carne", "leite", "ovos")
    var i = 1
    while(i <= listaCompras.size-1){
        println(i)
        println(listaCompras[i])
        i++
    }

    do{
        println(i)
        println(listaCompras[i-1])
        i++
    }while(i <= listaCompras.size-1)
}