fun main(){
    fun printAll(vararg message: String){
        for (m in message) println(m)
    }
    printAll("Ola", "Sim", "ai", "massa", "cass")


    fun log(vararg entries: String){
        printAll(*entries)
    }

    log("Ola", "Sim", "ai", "massa")

}
