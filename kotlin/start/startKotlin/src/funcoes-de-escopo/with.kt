class Configuration(val host: String, val port: Int)

fun main(){
    val config = Configuration(host = "127.0.0.1", port = 9000)

    with(config){
        println("$host:$port")
    }

    //Isso acima no lugar de:
    println("${config.host}:${config.port}")

    //No contexto do run, seria:
    config.run{
        println("$host:$port")
    }
}