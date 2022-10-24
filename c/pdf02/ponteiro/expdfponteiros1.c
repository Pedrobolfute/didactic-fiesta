#include <stdio.h>

//Ponteiros; deslocamento; int é 4 bytes de deslocamento.
int main(int argc, char *argv[])
{
    int x=4;
    int *pi;

    pi = &x;

    printf("pi aponta para %d\n", pi);
    pi +=1;
    printf("pi aponta para %d\n", pi);
    pi -=2;
    printf("pi aponta para %d\n", pi);
    pi -=3;
    printf("pi aponta para %d\n", pi);
    return 0;
}

//file:///home/pedro/%C3%81rea%20de%20Trabalho/IFBAIANO/MAT%C3%89RIAS/5%20PERIODO%202023.1/Estrutura%20de%20dados/c-parte%202.pdf

//pag 5