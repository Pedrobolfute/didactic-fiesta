fun main(){
    val a = 10
    val b = 0

    try{
        val div = a/b
        println(div)
    } catch(e: ArithmeticException){
        e.printStackTrace();
    } catch(e: Throwable){
        println(e.message)
    } finally{
        println("Finally execultado!")
    }
}