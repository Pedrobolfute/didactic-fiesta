#include <stdio.h>

void tipoIntPonteiro(){
    int andaQuatro = 4;
    int *ponteiro;

    ponteiro = &andaQuatro;

    printf("## Primeira função, tipoInt ##\n");
    printf("ponteiro do tipo int aponta para:\t%d\n" , ponteiro);
    ponteiro += 1;
    printf("ponteiro do tipo int aponta para: \t%d\n" , ponteiro);
    printf("Ponteiro andou 4 bytes na memória.\n\n");
    return 0;
}

void tipoFloatPonteiro(){
    int andaOito = 8;
    float *ponteiro;

    ponteiro = &andaOito;

    printf("## Segunda função, tipo float ##\n");
    printf("Ponteiro do tipo float aponta para: \t%d\n" , ponteiro);
    ponteiro += 1;
    printf("Ponteiro do tipo float aponta para: \t%d\n" , ponteiro);
    printf("Ponteiro andou 4 bytes na memória.\n\n");
    return 0;
}

void tipoCharPonteiro(){
    char andaDois = "d";
    char *ponteiro;

    ponteiro = &andaDois;

    printf("## Terceira função, tipo char? ##\n");
    printf("Ponteiro do tipo char aponta para: \t%d\n", ponteiro);
    ponteiro += 1;
    printf("Ponteiro do tipo char aponta para: = \t%d\n" , ponteiro);
    printf("Ponteiro andou 1 byte\n\n");
    return 0;
}

void tipoDoublePonteiro(){
    int andaOito = 40028922;
    double *ponteiro;

    ponteiro = &andaOito;
    
    printf("## Quarta função, tipo double ##\n");
    printf("Ponteiro do tipo double aponta para: \t%d\n", ponteiro);
    ponteiro += 1;
    printf("Ponteiro do tipo double aponta para: = \t%d\n" , ponteiro);
    printf("Ponteiro andou 8 bytes\n\n");
    return 0;
}

void tamanho(){
    printf("Tamanho dos tipos: \n");
    printf("Tamanho de um char =\t\t%lu bytes\n",sizeof(char));
    printf("Tamanho de um unsigned char =\t%lu bytes\n",sizeof(unsigned char));
    printf("Tamanho de um void =\t\t%lu bytes\n",sizeof(void));
    printf("Tamanho de um int =\t\t%d bytes\n",sizeof(int));
    printf("Tamanho de um unsigned int =\t%lu bytes\n",sizeof(unsigned int));
    printf("Tamanho de um short int =\t%lu bytes\n",sizeof(short int));
    printf("Tamanho de um double =\t\t%lu bytes\n\n",sizeof(double));
    return 0;
}


void main(){
    tipoIntPonteiro();
    tipoFloatPonteiro();
    tipoCharPonteiro();
    tipoDoublePonteiro();
    tamanho();
}