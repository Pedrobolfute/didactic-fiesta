data class Item(val name: String, val price: Float)
data class Order(val items: Collection<Item>)

fun Order.maxPricedItemValue(): Float = this.items.maxByOrNull { it.price }?.price ?: 0F
fun Order.commaDelimitedItemName() = this.items.maxByOrNull { it.price }?.name ?: "Sem Produtos"

val Order.commaDelimitedItemNames: String
    get() = items.map { it.name }.joinToString()

fun main(){
    val order = Order(listOf(Item("Bread", 25.0F), Item("Wine", 29.0F), Item("Water", 5.0F)))

    println("Max price Item name: ${order.maxPricedItemValue()}")
    println("Max price Item value: ${order.maxPricedItemValue()}")
    println("Items: ${order.commaDelimitedItemNames}")

}