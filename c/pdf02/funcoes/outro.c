#include <stdio.h>  

void main(void){
    bemVindo();
}

void bemVindo(){

    printf("Função 1;\n");
    funcDois();
}

void funcDois(){
    printf("Função 2;\n");
    funcTres();
}

void funcTres(){
    char myString[] = "Isso é uma string, man!\n";
    printf("Função 3.\n");
    printf("%s", myString);
}

//Ordem da função importa???