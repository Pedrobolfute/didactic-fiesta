class Animal(val name: String)

class Animal(val name: String)

class Zoo(val animaLs: List<Animal>){
    operator fun iterator(): Iterator<Animal>{
        return animaLs.iterator()
    }
}

fun main(){
    val animaLs = listOf(Animal("Zebra"), Animal("Lion"))
    val zoo = Zoo(animaLs)

    for (animal in zoo){
        println("Look a ${animal.name}!")
    }
}