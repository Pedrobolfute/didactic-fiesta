fun customPrint(s: String){
    print(s.uppercase())
}

fun main() {
    val empty = "teste".let{
        customPrint(it)
        it.isEmpty()
    }
    println(" is empty: $empty")
}