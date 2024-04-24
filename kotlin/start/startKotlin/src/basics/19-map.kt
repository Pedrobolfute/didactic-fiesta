const val POINTS_x_PASS: Int = 15
val passAccounts: MutableMap<Int, Int> = mutableMapOf(1 to 100, 2 to 100, 3 to 100)
val passReport: Map<Int, Int> = passAccounts

fun updatePointsCredit(accountId: Int){
    if(passAccounts.containsKey(accountId)){
        println("Updatting $accountId...")
        passAccounts[accountId] = passAccounts.getValue(accountId) + POINTS_x_PASS
    }else{
        println("Error: not exist (id: $accountId)")
    }
}

fun accountReport(){
    println("pass report: ")
    passReport.forEach{
            k, v -> println("ID $k: credit $v")
    }
}

fun main(){
    accountReport()
    updatePointsCredit(1)
    updatePointsCredit(1)
    updatePointsCredit(5)
    accountReport()
}