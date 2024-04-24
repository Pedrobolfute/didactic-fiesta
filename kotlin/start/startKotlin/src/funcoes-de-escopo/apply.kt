data class Person(var name: String, var age: Int, var about: String){
    constructor() : this("", 0, "")
}

fun main(){
    val pedro = Person()
    val strigDescription = pedro.apply{
        name = "Pedro"
        age = 25
        about = "Developer"
    }

    println(strigDescription.toString())
}