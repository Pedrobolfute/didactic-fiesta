#include <stdio.h>

void funcTres(){
    char myString[] = "Isso é uma string, man!\n";
    printf("Função 3.\n");
    printf("%s", myString);
}

void funcDois(){
    printf("Função 2;\n");
    funcTres();
}

void bemVindo(){

    printf("Função 1;\n");
    funcDois();
}

void main(){
    bemVindo();
}

//Ordem da função importa???