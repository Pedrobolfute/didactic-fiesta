fun main(){

    val uppercase1: (String) -> String = { str: String -> str.uppercase() }
    val uppercase2: (String) -> String = { str -> str.uppercase() }
    val uppercase3 = { str: String -> str.uppercase() }
//val uppercase4 = { str -> str.uppercase() }
    val uppercase5: (String) -> String = { it.uppercase() }
    val uppercase6: (String) -> String = String::uppercase

    println(uppercase1("pedro"))
    println(uppercase2("pedro"))
    println(uppercase3("pedro"))
//println(uppercase4("pedro"))
    println(uppercase5("pedro"))
    println(uppercase6("pedro"))

}
