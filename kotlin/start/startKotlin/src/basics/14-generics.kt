class MutableStack<E>(vararg items: E){
    private val elements = items.toMutableList()
    fun push(element: E) = elements.add(element)
    fun peek(): E = elements.last()
    fun pop(): E = elements.removeAt(elements.size-1)
    fun isEmpty() = elements.isEmpty()
    fun size() = elements.size
    override fun toString() = "MutableStack(${elements.joinToString()})"
}


fun main() {
    val stack = MutableStack("A", "B", "C")
    stack.push("D")
    println(stack)

    for(i in 1..stack.size()){
        println("pop(): ${stack.pop()}")
        println(stack)
    }
}