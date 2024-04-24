fun main() {

    fun getNullableLength(ns: String?){
        println("for $ns :")
        ns?.run{
            println("is empty? " + isEmpty()) //se uasse o let, deveria colocar o it.isEmpty()
            println("tlength = $length")
            length
        }
    }

    getNullableLength(null)
    getNullableLength("")
    getNullableLength("opa")
}