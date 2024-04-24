//ex 1
enum class State {
    IDLE, RUNNING, FINISHED
}

//ex 2
enum class Color(val rgb: Int){
    RED(0xFF0000),
    GREEN(0x00FF00),
    BLUE(0x0000FF),
    YELLOW(0xFFFF00);

    fun containsRed() = (this.rgb and 0xFF0000 != 0)
}


fun main() {

    //call ex1
    val state = State.FINISHED
    val message = when(state){
        State.IDLE -> "IT-S IDLE"
        State.RUNNING -> "IT-S RUNNING"
        State.FINISHED -> "IT-S FINISHED"
    }

    println(message)

    //cal ex2
    val red = Color.RED
    println(red)
    println(red.containsRed())
    println(Color.BLUE.containsRed())
    println(Color.YELLOW.containsRed())
}