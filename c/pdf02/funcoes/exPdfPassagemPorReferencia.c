#include <stdio.h>

void passagem_por_referencia(int *parametro1){
    *parametro1 += 1;
    printf("Valor de parametro1 durante a função: %d\n", *parametro1);
}

int main(int argc, char *argv[]){
    exemplo1();
}

int exemplo1(){
    int x = 30;
    printf("valor de x antes da função: %d\n", x);
    passagem_por_referencia(&x);
    printf("valor de x depois da função: %d\n", x);
    return 0;
}