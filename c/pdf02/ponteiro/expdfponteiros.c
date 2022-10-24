#include <stdio.h>

//Ponteiro; valor e endereço.
int main(int argc, char *argv[])
{
    int x=4;
    int *pi;

    pi = &x;

    printf("Endereço de x:                  %x\n", &x);
    printf("Valor de x:                     %d\n", x);
    printf("Valor DO ponteiro para x:       %x\n", pi);
    printf("Endereço do ponteiro para x:    %x\n", &pi);
    printf("Valor NO ponteiro para x:       %d\n", *pi);
    return 0;

}



// file:///home/pedro/%C3%81rea%20de%20Trabalho/IFBAIANO/MAT%C3%89RIAS/5%20PERIODO%202023.1/Estrutura%20de%20dados/c-parte%202.pdf 
// pag 3
