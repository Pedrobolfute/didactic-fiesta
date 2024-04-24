//https://github.com/Pedrobolfute/aprenda-kotlin-com-exemplos-lab

enum class Nivel { BASICO, INTERMEDIARIO, DIFICIL }
data class Usuario(val nome: String)
data class ConteudoEducacional(val nome: String, val duracao: Int = 60, val nivel: Nivel)
data class Formacao(val nome: String, var conteudos: List<ConteudoEducacional>)
val inscritos = mutableListOf<Usuario>()

fun matricular(usuario: Usuario) {
    inscritos.add(usuario)
    println("${usuario.nome} matriculado em $nome com SUCESSO!")
}
}

fun main() {
    val Components = ConteudoEducacional("Components", 120, Nivel.INTERMEDIARIO)
    val DOM = ConteudoEducacional("DOM", 120, Nivel.DIFICIL)
    val algoritimo = ConteudoEducacional("Algoritmo", 60, Nivel.BASICO)

    val javaScriptDeveloper = Formacao("JavaScript Developer", listOf(algoritimo, DOM, Components))

    javaScriptDeveloper.matricular(Usuario("Pedro"))

    println(javaScriptDeveloper)
}