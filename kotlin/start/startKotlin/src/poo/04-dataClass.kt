data class User(val name: String, val id: Int){
    override fun equals(other: Any?) = other is User && other.id == this.id
}


fun main() {
    val user = User("Alex", 1)
    println(user)

    val secondUser = User("Alex", 1)
    val thirdUser = User("Max", 2)

    println("user == secondUser: ${user == secondUser}")
    println("user == thirdUser: ${user == thirdUser}")

    //hashCode()
    println(user.hashCode())
    println(secondUser.hashCode())
    println(thirdUser.hashCode())

    //copy
    println(user.copy())
    println(user == user.copy())
    println(thirdUser == user.copy())
}