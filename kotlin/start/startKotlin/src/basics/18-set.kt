//uma lista que valida elementos duplicados

val openIssues: MutableSet<String> = mutableSetOf("un1", "un2", "un3")

fun addIssue(uniqueDesc:String): Boolean{
    return openIssues.add(uniqueDesc)
}

fun getStatusLog(isAdded: Boolean):String{
    return if(isAdded) "Registered!" else "Duplicated and Rejected."
}

fun main(){
    val aNewIssue: String = "un2"

    println("Issue $aNewIssue ${getStatusLog(addIssue(aNewIssue))}")
}