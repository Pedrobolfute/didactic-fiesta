//Escreva uma função que calcule e retorne a distância entre dois pontos (x1, y1) e (x2, y2). Todos os números e valores de retorno devem ser do tipo float.

#include <stdio.h>

float distancia(float x1, float y1, float x2, float y2){
    float vetor[1];
    vetor[0] = x2 - x1;
    vetor[1] = y2 - y1;

    return vetor[0, 1];
}

float main(int argc, char *argv[]){
    float x1, x2, y1, y2;
    float saidaVetor[1];
    printf("Valor de X1: ");
    scanf("%f", &x1);

    printf("Valor de X2: ");
    scanf("%f", &x2);

    printf("Valor de Y1: ");
    scanf("%f", &y1);

    printf("Valor de Y1: ");
    scanf("%f", &y1);

    saidaVetor[0, 1] = distancia(x1, x2, y1, y2);

    printf("\nDistância de X: %f\n", saidaVetor[0]);
    printf("\nDistância de Y: %f\n", saidaVetor[1]);

}