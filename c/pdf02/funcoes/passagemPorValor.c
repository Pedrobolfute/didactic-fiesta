#include <stdio.h>
#include <stdlib.h>

void passagemPorValor(int valor){
    valor += 1;
}

int main(){
    int var = 12;
    printf("variável antes da função: %d\n\n", var);
    passagemPorValor(var);
    printf("variável depois da função: %d\n\n", var);
    system("pause");
    printf("Opa!");
}