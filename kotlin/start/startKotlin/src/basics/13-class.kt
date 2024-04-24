class Customer

class Contact(val id: Int, var email: String)

fun main(){
    val customer = Customer()

    val contact = Contact(1, "fer@gmail.com")

    println(contact.id)
    contact.email = "pedro@gmail.com"
    println(contact.email)
}